import React, { useState } from 'react';
import PropTypes from 'prop-types';
import hotelsData from './hotels.json';

// Hotel Card Component
const HotelCard = ({ hotel }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="relative rounded-lg border p-4 shadow-md transition hover:shadow-lg">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-40 w-full rounded-md object-cover"
      />
      <h2 className="mt-2 text-xl font-bold">{hotel.name}</h2>
      <p className="text-gray-600">
        {hotel.cuisine} • {hotel.price}
      </p>

      <p>📍 {hotel.location}</p>
      <a
        href={`https://www.google.com/maps?q=${hotel.lat},${hotel.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View on Google Maps
      </a>

      <button
        onClick={toggleFavorite}
        className={`ml-6 mt-4 inline-block rounded-full px-4 py-1 text-sm font-medium transition ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
      </button>
    </div>
  );
};

// Hotels Section to display all hotel cards
const HotelCards = () => {
  return (
    <div className="mt-40 items-center justify-center p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {hotelsData.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

// PropTypes
HotelCard.propTypes = {
  hotel: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default HotelCards;
