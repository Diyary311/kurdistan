using InKurdistan.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics; // Add this

namespace InKurdistan
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            // Add CORS policy for React frontend
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("ReactFrontend", policy =>
                {
                    policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            // Add Authentication (Required for Authorization)
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme) // Simple scheme for now
                .AddJwtBearer(options => { }); // Empty config for testing

            // Database configuration
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(
                    builder.Configuration.GetConnectionString("DefaultConnection")));

            var app = builder.Build();

            // Seed database
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                SeedData.Initialize(services.GetRequiredService<AppDbContext>());
            }

            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            // Middleware order is critical
            app.UseCors("ReactFrontend");
            app.UseAuthentication(); // Now properly configured
            app.UseAuthorization();

            app.UseExceptionHandler(errorApp => {
                errorApp.Run(async context => {
                    context.Response.ContentType = "application/json";
                    var error = context.Features.Get<IExceptionHandlerFeature>();
                    await context.Response.WriteAsync(System.Text.Json.JsonSerializer.Serialize(new
                    {
                        error = error?.Error.Message
                    }));
                });
            });

            app.MapControllers();
            app.MapGet("/api/test", () => "Backend is connected!");

            app.MapGet("/api/test", () => "Backend is connected!");
            app.Run();
        }
    }
}