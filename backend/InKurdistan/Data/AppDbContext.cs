using Microsoft.EntityFrameworkCore;
using InKurdistan.Models; // Replace with your project's namespace

namespace InKurdistan.Data
{
    public class AppDbContext : DbContext  // Add inheritance
    {
        // Constructor (MUST include this)
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // DbSets for your tables

        public DbSet<User> Users { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<SubCity> SubCities { get; set; }
        public DbSet<Attraction> Attractions { get; set; }

        // Optional: Model configuration
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { // Fix decimal precision for City.Area
            modelBuilder.Entity<City>()
                .Property(c => c.Area)
                .HasPrecision(18, 2);

      
        }
    }
}