import PropTypes from 'prop-types';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="rounded-lg border p-4 shadow-md">
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
      <a
        href={`https://www.google.com/maps?q=${restaurant.lat},${restaurant.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View on Google Maps
      </a>
    </div>
  );
};

// Add prop types validation
RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default RestaurantCard;
