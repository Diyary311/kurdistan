import React from 'react';
import PropTypes from 'prop-types';
import hotelsData from './hotels.json';

// Hotel Card Component
const HotelCard = ({ hotel }) => {
  return (
    <div className="rounded-lg border p-4 shadow-md transition hover:shadow-lg">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-40 w-full rounded-md object-cover"
      />
      <h2 className="mt-2 text-xl font-bold">{hotel.name}</h2>
      <p className="text-gray-600">
        {hotel.cuisine} • {hotel.price}
      </p>
      <p>
        ⭐ {hotel.rating} ({hotel.reviews} reviews)
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
    </div>
  );
};

// Hotels Section to display all hotel cards
const HotelCards = () => {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Recommended Hotels</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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

export default HotelCard;
