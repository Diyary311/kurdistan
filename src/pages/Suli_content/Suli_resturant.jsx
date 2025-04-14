import Navbar from '../../homee/Navbar.jsx';
import React, { useState, useEffect } from 'react';
import FilterBox from '../erbil_content/FilterBox.jsx';

import RestaurantList from '../Suli_content/resturantlist.jsx'; // Import the RestaurantList component

function Suli_resturant() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Page Title */}
        <h1
          data-aos="fade-up"
          data-aos-fadeduration="1800"
          className="mb-8 mt-32 text-center text-3xl font-bold text-green-500 sm:text-4xl md:text-5xl"
        >
          Restaurants in Sulaimaniyah
        </h1>

        {/* Main content: FilterBox and RestaurantList */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Filter Section */}
          <div className="md:w-1/4">
            <FilterBox />
          </div>

          {/* Restaurant List Section */}
          <div className="md:w-3/4">
            <RestaurantList /> {/* Use the RestaurantList component here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suli_resturant;
