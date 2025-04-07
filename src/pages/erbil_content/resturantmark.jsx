import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types'; // Add this
import propTypes from 'prop-types';
const RestaurantMarker = ({ restaurant }) => {
  const map = useMap();

  const handleClick = () => {
    map.setView([restaurant.lat, restaurant.lng], 15); // zoom level 15 is good
  };

  return (
    <Marker
      position={[restaurant.lat, restaurant.lng]}
      eventHandlers={{ click: handleClick }}
      icon={L.icon({
        iconUrl: '/your-icon-path.png', // optional custom icon
        iconSize: [32, 32],
      })}
    >
      <Popup>{restaurant.name}</Popup>
    </Marker>
  );
};

// this is the prop types validation
RestaurantMarker.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default RestaurantMarker;
