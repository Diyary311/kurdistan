using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InKurdistan.Models
{
    public class City
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }


        public List<Hotel> Hotels { get; set; }

    }
}