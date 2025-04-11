import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Individual hotel card
const HotelCard = ({ hotel }) => {
  return (
    <div className="w-full h-full rounded-lg border p-4 shadow-md transition hover:shadow-lg">
      <img
        src={`http://localhost:5000${hotel.imagePath}`}
        alt={hotel.hotelName}
        className="h-40 w-full rounded-md object-cover"
      />
      <h2 className="mt-2 text-xl font-bold">{hotel.hotelName}</h2>
<br />
      <p className="text-slate-600">{hotel.description}</p>
      <br />
      <p className="mt-1">
        <strong>Rating:</strong> {'⭐️'.repeat(hotel.starRate)}
      </p>
      <br />
      <p>
        <strong>Price:</strong> ${hotel.price.toFixed(2)} / night
      </p>
      <br />
      <a
        href={hotel.googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View on Google Maps
      </a>
    </div>
  );
};

// Grid wrapper that fetches and displays hotel cards
const HotelCards = ({ cityId }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/Hotels?cityIds=${cityId}`)
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error('Failed to load hotels:', err));
  }, [cityId]);

  return (
    <div className="items-center justify-center px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

// Props validation
HotelCard.propTypes = {
  hotel: PropTypes.shape({
    hotelName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    starRate: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    googleMapUrl: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

HotelCards.propTypes = {
  cityId: PropTypes.number.isRequired,
};

export default HotelCards;
