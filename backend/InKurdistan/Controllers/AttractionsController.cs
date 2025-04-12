using InKurdistan.Data;
using InKurdistan.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InKurdistan.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttractionsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _env;

        public AttractionsController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAttraction([FromForm] AttractionDto dto)
        {
            if (dto.Image == null || string.IsNullOrWhiteSpace(dto.Name))
                return BadRequest("Name and image required.");

            var folderPath = Path.Combine(_env.WebRootPath, "images/attractions");
            if (!Directory.Exists(folderPath))
                Directory.CreateDirectory(folderPath);

            string fileName = Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);
            string filePath = Path.Combine(folderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
                await dto.Image.CopyToAsync(stream);

            var attraction = new Attraction
            {
                Name = dto.Name,
                Description = dto.Description,
                ImagePath = $"/images/attractions/{fileName}",
                CityId = dto.CityId

            };

            _context.Attractions.Add(attraction);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAttractions), new { id = attraction.Id }, attraction);
        }

        [HttpGet]
        public async Task<IActionResult> GetAttractions([FromQuery] string? cityIds)
        {
            var query = _context.Attractions.AsQueryable();

            if (!string.IsNullOrEmpty(cityIds))
            {
                var ids = cityIds
                    .Split(',', StringSplitOptions.RemoveEmptyEntries)
                    .Select(id => int.TryParse(id, out var cid) ? cid : (int?)null)
                    .Where(cid => cid.HasValue)
                    .Select(cid => cid.Value)
                    .ToList();

                query = query.Where(a => ids.Contains(a.CityId));
            }

            return Ok(await query.ToListAsync());
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetAttractionById(int id)
        {
            var attraction = await _context.Attractions.FindAsync(id);
            if (attraction == null) return NotFound();
            return Ok(attraction);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAttraction(int id, [FromForm] AttractionDto dto)
        {
            var attraction = await _context.Attractions.FindAsync(id);
            if (attraction == null) return NotFound();

            attraction.Name = dto.Name;
            attraction.Description = dto.Description;
            attraction.CityId = dto.CityId;


            if (dto.Image != null)
            {
                if (!string.IsNullOrEmpty(attraction.ImagePath))
                {
                    var oldPath = Path.Combine(_env.WebRootPath, attraction.ImagePath.TrimStart('/'));
                    if (System.IO.File.Exists(oldPath))
                        System.IO.File.Delete(oldPath);
                }

                var folder = Path.Combine(_env.WebRootPath, "images/attractions");
                string newFile = Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);
                string newPath = Path.Combine(folder, newFile);

                using (var stream = new FileStream(newPath, FileMode.Create))
                    await dto.Image.CopyToAsync(stream);

                attraction.ImagePath = $"/images/attractions/{newFile}";
            }

            _context.Attractions.Update(attraction);
            await _context.SaveChangesAsync();

            return Ok(attraction);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttraction(int id)
        {
            var attraction = await _context.Attractions.FindAsync(id);
            if (attraction == null) return NotFound();

            if (!string.IsNullOrEmpty(attraction.ImagePath))
            {
                var filePath = Path.Combine(_env.WebRootPath, attraction.ImagePath.TrimStart('/'));
                if (System.IO.File.Exists(filePath))
                    System.IO.File.Delete(filePath);
            }

            _context.Attractions.Remove(attraction);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    public class AttractionDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public IFormFile? Image { get; set; }
        public int CityId { get; set; }
    }
}
