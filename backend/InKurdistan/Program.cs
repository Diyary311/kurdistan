using InKurdistan.Data;
using Microsoft.EntityFrameworkCore;

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
                    policy.WithOrigins("http://localhost:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

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

            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            // Middleware order is critical
            app.UseCors("ReactFrontend");
            app.UseAuthentication(); // Add this
            app.UseAuthorization();
            app.MapControllers(); // Add this line

            app.MapGet("/api/test", () => "Backend is connected!");
            app.Run();
        }
    }
}