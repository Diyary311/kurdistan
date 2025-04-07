import React from 'react';
import Navbar from '../../../homee/Navbar';
import HotelCard from './HotelCard';

function Hotel() {
  return (
    <div className="flex min-h-screen items-start p-5">
      <h1
        data-aos="fade-up"
        data-aos-fadeduration="1800"
        className="absolute left-1/2 top-0 mt-24 -translate-x-1/2 transform text-center text-5xl font-bold font-semibold text-green-500"
      >
        Hoteles in Erbil
      </h1>

      <Navbar />

      {/*card section */}

      <section className="HotelCard">
        <HotelCard />
      </section>
    </div>
  );
}

export default Hotel;
