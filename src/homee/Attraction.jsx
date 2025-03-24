import React, { useState, useEffect } from 'react';

// Image paths with corresponding text
const images = [
  { src: 'src/assets/images/Attraction/1.jpeg', text: 'Sherwana Castle' },
  { src: 'src/assets/images/Attraction/2.jpg', text: 'Akre' },
  { src: 'src/assets/images/Attraction/4.jpg', text: 'Rewandwz Kharand' },
  { src: 'src/assets/images/Attraction/5.jpg', text: 'dalal bridge' },
];

function Attraction() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isfavorite, setfavorite] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Use useEffect to set an interval for the automatic slide change
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section className="Attraction py-10" id="Attraction">
      <div
        className="mb-6 text-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-4xl font-bold">Attractions</h1>
        <p className="mt-2 text-gray-600">
          Kurdistan is a land of beauty and heritage, offering a wide range of
          attractions for visitors to explore. From ancient ruins and historical
          sites to stunning landscapes and vibrant cities.
        </p>
      </div>

      {/* Image Slider with Text Overlay */}
      <div
        className="relative flex items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-lg transition-all hover:scale-110"
        >
          ◀
        </button>

        {/* Image Container with Text Overlay */}
        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-700 shadow-lg">
          <img
            src={images[currentIndex].src}
            alt="Attraction"
            className="h-[450px] w-full object-cover transition-all duration-500 hover:scale-105"
          />

          <button
            onClick={() => setfavorite(!isfavorite)}
            className="${ isFavorite ? 'scale-110 text-red-500' : 'hover:scale-105 hover:text-red-400' absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-md transition-all"
          >
            {isfavorite ? '❤️' : '🤍'}
          </button>

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-lg bg-black bg-opacity-50 px-6 py-3 text-lg text-white backdrop-blur-md">
            {images[currentIndex].text}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-lg transition-all hover:scale-110"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default Attraction;
