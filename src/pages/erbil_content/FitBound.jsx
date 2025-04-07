import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';

const FitBounds = ({ restaurants }) => {
  const map = useMap();

  // ✅ Resize map after initial render to fix display issues
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  // ✅ Fit map to bounds based on restaurants
  useEffect(() => {
    if (restaurants.length === 0) return;

    const bounds = L.latLngBounds(restaurants.map((r) => [r.lat, r.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [restaurants, map]);

  return null;
};

FitBounds.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FitBounds;
