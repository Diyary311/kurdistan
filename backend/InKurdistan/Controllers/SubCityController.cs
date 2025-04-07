using InKurdistan.Data;
using InKurdistan.Models;
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

        [HttpPost]
        public async Task<IActionResult> CreateSubCity([FromForm] string name, [FromForm] IFormFile image)
        {
            if (image == null || image.Length == 0)
                return BadRequest("No image uploaded");

            // Save image
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(image.FileName);
            var filePath = Path.Combine(_env.WebRootPath, "uploads", fileName);

            Directory.CreateDirectory(Path.GetDirectoryName(filePath));
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            var subCity = new SubCity
            {
                Name = name,
                ImageUrl = $"/uploads/{fileName}"
            };

            _context.SubCities.Add(subCity);
            await _context.SaveChangesAsync();

            return Ok(subCity);
        }

        [HttpGet]
        public IActionResult GetSubCities()
        {
            var subCities = _context.SubCities.ToList();
            return Ok(subCities);
        }
    }
}