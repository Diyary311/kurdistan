import React from 'react';
import Navbar from '../../../homee/Navbar';
import HotelCard from './HotelCard';

function Hotel() {
  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20">
      <h1 className="text-center text-4xl font-bold font-semibold text-green-500">
        Hoteles in Erbil
      </h1>

      <Navbar />

      {/*card section */}
      <section
        className="mt-6 grid grid-cols-1 gap-5"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-easing="ease-in-out"
      >
        <HotelCard />
      </section>
    </div>
  );
}

export default Hotel;
