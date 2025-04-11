using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InKurdistan.Models
{
    public class Hotel
    {
        public int Id { get; set; }

        [Required]
        public string HotelName { get; set; }

        [Range(1, 5)]
        public int StarRate { get; set; }

        [Required]
        public decimal Price { get; set; }

        public string ImagePath { get; set; }

        public string Description { get; set; }

        [Url]
        public string GoogleMapUrl { get; set; }


        // Foreign key to City
        [ForeignKey("City")]
        public int CityId { get; set; }
        public City City { get; set; }

    }
}
