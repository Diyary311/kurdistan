using InKurdistan.Data;
using InKurdistan.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InKurdistan.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubCitiesController : ControllerBase
    {
        private readonly AppDbContext _context; // Changed to AppDbContext
        private readonly IWebHostEnvironment _env;

        public SubCitiesController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // Create new subcity
        [HttpPost]
        public async Task<IActionResult> CreateSubCity([FromForm] SubCityUpdateDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.CityName) || dto.Image == null)
            {
                return BadRequest("City name and image are required.");
            }

            // Save the uploaded image
            string uploadsFolder = Path.Combine(_env.WebRootPath, "images/subcities");
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            string uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.Image.FileName);
            string filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.Image.CopyToAsync(stream);
            }

            // Save subcity to the database
            var subCity = new SubCity
            {
                CityName = dto.CityName,
                ImageUrl = $"/images/subcities/{uniqueFileName}",
                Description = dto.Description  // Save the description as well
            };

            _context.SubCities.Add(subCity);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSubCities), new { id = subCity.Id }, subCity);
        }

        // Get all subcities
        [HttpGet]
        public async Task<IActionResult> GetSubCities()
        {
            var subCities = await _context.SubCities.ToListAsync();
            return Ok(subCities);
        }

        // Get a single subcity by ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubCityById(int id)
        {
            var subCity = await _context.SubCities.FindAsync(id);
            if (subCity == null) return NotFound();

            return Ok(subCity);
        }

        // Update subcity by ID
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSubCity(int id, [FromForm] SubCityUpdateDto dto)
        {
            var subCity = await _context.SubCities.FindAsync(id);
            if (subCity == null) return NotFound();

            // Update city name and description
            subCity.CityName = dto.CityName;
            subCity.Description = dto.Description;

            // Handle image update (if a new image is provided)
            if (dto.Image != null)
            {
                // Delete the old image
                if (!string.IsNullOrEmpty(subCity.ImageUrl))
                {
                    var oldFilePath = Path.Combine(_env.WebRootPath, subCity.ImageUrl.TrimStart('/'));
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }

                // Save the new image
                string uploadsFolder = Path.Combine(_env.WebRootPath, "images/subcities");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                string uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.Image.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.Image.CopyToAsync(stream);
                }

                subCity.ImageUrl = $"/images/subcities/{uniqueFileName}";
            }

            _context.SubCities.Update(subCity);
            await _context.SaveChangesAsync();

            return Ok(subCity);
        }

        // Delete subcity by ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubCity(int id)
        {
            var subCity = await _context.SubCities.FindAsync(id);
            if (subCity == null) return NotFound();

            // Delete image file
            if (!string.IsNullOrEmpty(subCity.ImageUrl))
            {
                var filePath = Path.Combine(_env.WebRootPath, subCity.ImageUrl.TrimStart('/'));
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
            }

            _context.SubCities.Remove(subCity);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    // DTO for updating subcity
    public class SubCityUpdateDto
    {
        public string CityName { get; set; }
        public IFormFile Image { get; set; }
        public string Description { get; set; }
    }
}
