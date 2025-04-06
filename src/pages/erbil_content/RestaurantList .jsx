import React, { useState, useEffect } from 'react';
import MapComponent from '../MapComponent';
import restaurantData from './resturanlocation.json'; // Import JSON data
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import RestaurantCard from './RestaurantCard ';
const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    // No fetch needed! Just load the data
    setRestaurants(restaurantData);
  }, []);

  {
    /*useEffect(() => {
    fetch('http://localhost:5000/restaurants') // Replace with your API
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);*/
  }

  return (
    <div>
      <MapComponent restaurants={restaurants} />

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="rounded-lg border p-4 shadow-md">
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
