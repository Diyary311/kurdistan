using InKurdistan.Models;
using BCrypt.Net;
namespace InKurdistan.Data
{
    public static class SeedData
    {
        public static void Initialize(AppDbContext context)
        {
            if (!context.Users.Any())
            {
                var adminUser = new User
                {
                    Username = "admin",
                    Email = "admin@inkurdistan.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("admin123"),
                    Role = "Admin"
                };
                context.Users.Add(adminUser);
                context.SaveChanges();
            }
        }
    }
}
