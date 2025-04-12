using System.ComponentModel.DataAnnotations;

namespace InKurdistan.Models
{
    public class Attraction
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public string ImagePath { get; set; }

        public int CityId { get; set; }
        public City City { get; set; }
    }
}
