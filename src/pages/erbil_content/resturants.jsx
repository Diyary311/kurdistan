import React from 'react';
import Navbar from '../../homee/Navbar';
import FilterBox from './FilterBox';
import RestaurantList from './RestaurantList ';
function Resturants() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Page Title */}
        <h1 className="mb-8 mt-32 text-center text-3xl font-bold text-green-500 sm:text-4xl md:text-5xl">
          Restaurants in Erbil
        </h1>

        {/* Main content: FilterBox and RestaurantList */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Filter Section */}
          <div className="md:w-1/4">
            <FilterBox />
          </div>

          {/* Restaurant List Section */}
          <div className="md:w-3/4">
            <RestaurantList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resturants;
