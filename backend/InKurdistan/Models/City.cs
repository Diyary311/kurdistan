using System.ComponentModel.DataAnnotations;

namespace InKurdistan.Models
{
    public class City
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public int? Population { get; set; }
        public decimal? Area { get; set; }
        public string ImagePath { get; set; }

        public List<SubCity> SubCities { get; set; }
        public List<Attraction> Attractions { get; set; }
    }
}