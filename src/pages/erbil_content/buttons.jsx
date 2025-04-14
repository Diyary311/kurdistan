import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// Buttons component now accepts a 'city' prop to dynamically route to city-specific pages
function Buttons({ city }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="btn flex items-center justify-center gap-4 rounded-sm">
        <button
          onClick={() => navigate(`/${city}/restaurants`)}
          className="cursor-pointer border-white bg-green-500 transition-all duration-700 hover:-translate-y-5 hover:bg-transparent hover:font-semibold hover:tracking-widest hover:text-green-500"
        >
          Restaurants
        </button>

        <button
          onClick={() => navigate(`/${city}/hotels`)}
          className="cursor-pointer border-white bg-green-500 transition-all duration-700 hover:-translate-y-5 hover:bg-transparent hover:font-semibold hover:tracking-widest hover:text-green-500"
        >
          Hotels
        </button>

        <button
          onClick={() => navigate(`/${city}/subcity`)}
          className="cursor-pointer border-white bg-green-500 transition-all duration-700 hover:-translate-y-5 hover:bg-transparent hover:font-semibold hover:tracking-widest hover:text-green-500"
        >
          Subcities
        </button>
      </div>
    </div>
  );
}
Buttons.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Buttons;
