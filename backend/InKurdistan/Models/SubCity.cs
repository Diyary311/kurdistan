using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InKurdistan.Models
{
    public class SubCity
    {
        public int Id { get; set; }

        [Required]
        public string CityName { get; set; }

        public string ImageUrl { get; set; }

        public string Description { get; set; }

        public int CityId { get; set; }
        public City City { get; set; }
    }
}