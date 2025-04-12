using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InKurdistan.Models
{
    public class Restaurant
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Location { get; set; }

        public double Lat { get; set; }

        public double Lng { get; set; }

        public int StarRate { get; set; } // 1 to 5

        public string Type { get; set; } // e.g. Kurdish, Italian, etc.

        public string ImagePath { get; set; }

        [Required]
        [ForeignKey("City")]
        public int CityId { get; set; }

        public City City { get; set; }

        [NotMapped]
        public IFormFile? Image { get; set; } // for uploads only (not mapped to DB)
    }
}
