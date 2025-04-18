﻿using InKurdistan.Models;
using BCrypt.Net;
namespace InKurdistan.Data
{
    public static class SeedData
    {
        public static void Initialize(AppDbContext context)
        {
            if (!context.Users.Any())
            {
                context.Users.Add(new User
                {
                    Username = "admin",
                    Email = "admin@inkurdistan.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("admin1234"),
                    Role = "Admin"
                });

                context.SaveChanges();
            }
        }
    }
}
