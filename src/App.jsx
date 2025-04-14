import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './homee/home';
import Erbil from './pages/erbil';
import Resturants from './pages/erbil_content/resturants';
import HistoryContent from './pages/HistoryAndCulture_Components/historyContent';
import Hotel from './pages/erbil_content/Hotel/Hotel';
import Subcity from './pages/erbil_content/Subcity/Subcity';
import Suli from './pages/Suli_content/Suli';
import Suli_resturant from './pages/Suli_content/Suli_resturant.jsx';
import Suli_Hotel from './pages/Suli_content/Hotel.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Culture&History" element={<HistoryContent />} />

        {/* Erbil Section */}
        <Route path="/erbil" element={<Erbil />} />
        <Route path="/erbil/restaurants" element={<Resturants />} />
        <Route path="/erbil/hotels" element={<Hotel />} />
        <Route path="/erbil/subcity" element={<Subcity />} />

        {/* Suli Section */}
        <Route path="/suli" element={<Suli />} />
        <Route path="/suli/restaurants" element={<Suli_resturant />} />
        <Route path="/suli/hotels" element={<Suli_Hotel />} />
        {/* Add Hotel and Subcity components for Suli too if needed */}
      </Routes>
    </Router>
  );
}

export default App;
