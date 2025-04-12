using InKurdistan.Data;
using InKurdistan.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InKurdistan.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HotelsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _env;

        public HotelsController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpPost]
        public async Task<IActionResult> AddHotel([FromForm] HotelDto dto)
        {
            try
            {
                if (dto.Image == null || string.IsNullOrWhiteSpace(dto.HotelName))
                    return BadRequest("Hotel name and image are required.");

                string folder = Path.Combine(_env.WebRootPath, "images/hotels");
                if (!Directory.Exists(folder))
                    Directory.CreateDirectory(folder);

                string fileName = Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);
                string filePath = Path.Combine(folder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.Image.CopyToAsync(stream);
                }

                var hotel = new Hotel
                {
                    HotelName = dto.HotelName,
                    StarRate = dto.StarRate,
                    Price = dto.Price,
                    GoogleMapUrl = dto.GoogleMapUrl,
                    Description = dto.Description,
                    CityId = dto.CityId,
                    ImagePath = "/images/hotels/" + fileName
                };

                _context.Hotels.Add(hotel);
                await _context.SaveChangesAsync();
                return Ok(hotel);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.InnerException?.Message ?? ex.Message });
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetHotels([FromQuery] string? cityIds)
        {
            var query = _context.Hotels.AsQueryable();

            if (!string.IsNullOrEmpty(cityIds))
            {
                var ids = cityIds.Split(',').Select(int.Parse).ToList();
                query = query.Where(h => ids.Contains(h.CityId));
            }

            var hotels = await query.ToListAsync();
            return Ok(hotels);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHotelById(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null) return NotFound();
            return Ok(hotel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHotel(int id, [FromForm] HotelDto dto)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null) return NotFound();

            hotel.HotelName = dto.HotelName;
            hotel.StarRate = dto.StarRate;
            hotel.Price = dto.Price;
            hotel.GoogleMapUrl = dto.GoogleMapUrl;
            hotel.Description = dto.Description;
            hotel.CityId = dto.CityId;

            if (dto.Image != null)
            {
                if (!string.IsNullOrEmpty(hotel.ImagePath))
                {
                    string oldPath = Path.Combine(_env.WebRootPath, hotel.ImagePath.TrimStart('/'));
                    if (System.IO.File.Exists(oldPath))
                        System.IO.File.Delete(oldPath);
                }

                string uploads = Path.Combine(_env.WebRootPath, "images/hotels");
                if (!Directory.Exists(uploads))
                    Directory.CreateDirectory(uploads);

                string fileName = Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);
                string filePath = Path.Combine(uploads, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.Image.CopyToAsync(stream);
                }

                hotel.ImagePath = "/images/hotels/" + fileName;
            }

            _context.Hotels.Update(hotel);
            await _context.SaveChangesAsync();
            return Ok(hotel);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null) return NotFound();

            if (!string.IsNullOrEmpty(hotel.ImagePath))
            {
                string filePath = Path.Combine(_env.WebRootPath, hotel.ImagePath.TrimStart('/'));
                if (System.IO.File.Exists(filePath))
                    System.IO.File.Delete(filePath);
            }

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    public class HotelDto
    {
        public string HotelName { get; set; }
        public int StarRate { get; set; }
        public decimal Price { get; set; }
        public string GoogleMapUrl { get; set; }
        public string Description { get; set; }
        public int CityId { get; set; }
        public IFormFile? Image { get; set; }
    }
}
