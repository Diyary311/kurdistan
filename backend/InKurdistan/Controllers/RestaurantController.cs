using InKurdistan.Data;
using InKurdistan.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InKurdistan.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RestaurantsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _env;

        public RestaurantsController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpPost]
        public async Task<IActionResult> AddRestaurant([FromForm] RestaurantDto dto)
        {
            if (dto.Image == null || string.IsNullOrWhiteSpace(dto.Name))
                return BadRequest("Name and image are required.");

            string folder = Path.Combine(_env.WebRootPath, "images/restaurants");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);

            string fileName = Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);
            string filePath = Path.Combine(folder, fileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.Image.CopyToAsync(stream);
            }

            var restaurant = new Restaurant
            {
                Name = dto.Name,
                Location = dto.Location,
                Lat = dto.Lat,
                Lng = dto.Lng,
                StarRate = dto.StarRate,
                Type = dto.Type,
                CityId = dto.CityId,
                ImagePath = "/images/restaurants/" + fileName
            };

            _context.Restaurants.Add(restaurant);
            await _context.SaveChangesAsync();
            return Ok(restaurant);
        }

        [HttpGet]
        public async Task<IActionResult> GetRestaurants([FromQuery] string? cityIds)
        {
            var query = _context.Restaurants.AsQueryable();
            if (!string.IsNullOrEmpty(cityIds))
            {
                var ids = cityIds.Split(',').Select(int.Parse).ToList();
                query = query.Where(r => ids.Contains(r.CityId));
            }

            return Ok(await query.ToListAsync());
        }

        [HttpGet("{id}/{type}")]
        public async Task<IActionResult> GetRestaurantsByCityAndType(int id, string type)
        {
            var list = await _context.Restaurants
                .Where(r => r.CityId == id &&
                            r.Type.ToLower().Trim() == type.ToLower().Trim())
                .ToListAsync();

            if (list == null || list.Count == 0)
                return NotFound($"No restaurants found in city {id} with type '{type}'.");

            return Ok(list);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRestaurant(int id, [FromForm] RestaurantDto dto)
        {
            var restaurant = await _context.Restaurants.FindAsync(id);
            if (restaurant == null) return NotFound();

            restaurant.Name = dto.Name;
            restaurant.Location = dto.Location;
            restaurant.Lat = dto.Lat;
            restaurant.Lng = dto.Lng;
            restaurant.StarRate = dto.StarRate;
            restaurant.Type = dto.Type;
            restaurant.CityId = dto.CityId;

            if (dto.Image != null)
            {
                string oldPath = Path.Combine(_env.WebRootPath, restaurant.ImagePath.TrimStart('/'));
                if (System.IO.File.Exists(oldPath))
                    System.IO.File.Delete(oldPath);

                string newFileName = Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);
                string newPath = Path.Combine(_env.WebRootPath, "images/restaurants", newFileName);
                using (var stream = new FileStream(newPath, FileMode.Create))
                {
                    await dto.Image.CopyToAsync(stream);
                }

                restaurant.ImagePath = "/images/restaurants/" + newFileName;
            }

            _context.Restaurants.Update(restaurant);
            await _context.SaveChangesAsync();
            return Ok(restaurant);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRestaurant(int id)
        {
            var res = await _context.Restaurants.FindAsync(id);
            if (res == null) return NotFound();

            if (!string.IsNullOrWhiteSpace(res.ImagePath))
            {
                string fullPath = Path.Combine(_env.WebRootPath, res.ImagePath.TrimStart('/'));
                if (System.IO.File.Exists(fullPath))
                    System.IO.File.Delete(fullPath);
            }

            _context.Restaurants.Remove(res);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    public class RestaurantDto
    {
        public string Name { get; set; }
        public string Location { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
        public int StarRate { get; set; }
        public string Type { get; set; }
        public int CityId { get; set; }
        public IFormFile? Image { get; set; }
    }
}
