import React, { useState, useEffect } from 'react';
import MapComponent from '../MapComponent';
import restaurantData from './suli_resturant.json'; // Import your restaurant data
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); // Track selected restaurant

  useEffect(() => {
    setRestaurants(restaurantData);
  }, []);

  const handleCardClick = (restaurant) => {
    setSelectedRestaurant(restaurant); // Update selected restaurant
  };

  return (
    <div>
      <MapComponent
        restaurants={restaurants}
        selectedRestaurant={selectedRestaurant}
      />
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="cursor-pointer rounded-lg border p-4 shadow-md"
            onClick={() => handleCardClick(restaurant)} // Add click handler
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-40 w-full rounded-md object-cover"
            />
            <h2 className="mt-2 text-xl font-bold">{restaurant.name}</h2>
            <p className="text-gray-600">
              {restaurant.cuisine} • {restaurant.price}
            </p>
            <p>
              ⭐ {restaurant.rating} ({restaurant.reviews} reviews)
            </p>
            <p>📍 {restaurant.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
