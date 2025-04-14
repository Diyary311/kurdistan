import React, { useState } from 'react';
import Navbar from '../../homee/Navbar';
import FilterBox from './FilterBox';
import RestaurantList from './RestaurantList';


function Resturants() {
  const [selectedType, setSelectedType] = useState(''); // Fix #1: add state

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1
          data-aos="fade-up"
          data-aos-fadeduration="1800"
          className="mb-8 mt-32 text-center text-3xl font-bold text-green-500 sm:text-4xl md:text-5xl"
        >
          Restaurants in Erbil
        </h1>

        <div className="flex flex-col gap-4 md:flex-row">
          {/* Filter Section */}
          <div className="md:w-1/4">
            <FilterBox onFilterChange={setSelectedType} /> {/* Fix #2: working prop */}
          </div>

          {/* Restaurant List Section */}
          <div className="md:w-3/4">
            <RestaurantList selectedType={selectedType} /> {/* Fix #3: pass type */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resturants;
