using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InKurdistan.Models
{
    public class City
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public int? Population { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal? Area { get; set; }
        public string ImagePath { get; set; }

        
    }
}