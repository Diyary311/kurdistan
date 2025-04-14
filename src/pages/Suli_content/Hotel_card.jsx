// src/pages/Hotel_card.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Individual hotel card component
const HotelCard = ({ hotel }) => {
  // Generate a Google Maps URL using the hotel's address
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.address)}`;

  // If the backend doesn't send a price, we default to 0 (or modify as needed)
  const price = hotel.price !== undefined ? hotel.price : 0;

  return (
    <div className="h-full w-full rounded-lg border p-4 shadow-md transition hover:shadow-lg">
      {/* Display image; prepend backend URL if needed */}
      <img
        src={`http://localhost:5000/${hotel.image}`}
        alt={hotel.name}
        className="h-40 w-full rounded-md object-cover"
      />
      <h2 className="mt-2 text-xl font-bold">{hotel.name}</h2>
      <br />
      <p className="text-slate-600">{hotel.address}</p>
      <br />
      <p className="mt-1">
        <strong>Rating:</strong> {'⭐️'.repeat(hotel.star_rating)}
      </p>
      <br />
      <p>
        <strong>Price:</strong> ${price.toFixed(2)} / night
      </p>
      <br />
      <a
        href={googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View on Google Maps
      </a>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    star_rating: PropTypes.number.isRequired,
    price: PropTypes.number, // Optional; defaults to 0 if not provided
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Grid wrapper that fetches and displays hotel cards
const HotelCards = ({ cityId }) => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching hotels for cityId:', cityId);
    fetch(`http://localhost:5000/api/Hotels?cityIds=${cityId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Hotels data received:', data);
        setHotels(data);
      })
      .catch((err) => {
        console.error('Failed to load hotels:', err);
        setError(err.message);
      });
  }, [cityId]);

  if (error) {
    return <div>Error loading hotels: {error}</div>;
  }

  if (!hotels || hotels.length === 0) {
    return <div>No hotels available.</div>;
  }

  return (
    <div className="items-center justify-center px-4 md:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

HotelCards.propTypes = {
  cityId: PropTypes.number.isRequired,
};

export default HotelCards;
