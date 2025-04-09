using InKurdistan.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;

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
                    policy.WithOrigins(
                        "http://localhost:5173",  // React/Vite default
                        "http://localhost:5000" 
                    )
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            // Add Authentication (Required for Authorization)
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => { }); // Empty config for now

            // Database configuration
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(
                    builder.Configuration.GetConnectionString("DefaultConnection")));

            var app = builder.Build();
            app.Urls.Clear();
            app.Urls.Add("http://localhost:5000");
            

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

            app.UseStaticFiles();
            app.UseRouting();

            // ✅ Apply the named CORS policy
            app.UseCors("ReactFrontend");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseExceptionHandler(errorApp =>
            {
                errorApp.Run(async context =>
                {
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

            app.Run();
        }
    }
}
