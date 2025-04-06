import React from 'react';
import Navbar from '../../homee/Navbar';
import FilterBox from './FilterBox';
import RestaurantList from './RestaurantList ';
function Resturants() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-start p-5">
        <h1 className="absolute left-1/2 top-0 mt-20 -translate-x-1/2 text-center text-5xl font-bold font-semibold text-green-500">
          Resturants in Erbil
        </h1>

        {/* filter section */}
        <section className="mt-44 h-56 w-56">
          <FilterBox />
        </section>

        <section className="ml-56 mt-20 mt-32 w-full">
          <RestaurantList />
        </section>
      </div>
    </div>
  );
}

export default Resturants;
