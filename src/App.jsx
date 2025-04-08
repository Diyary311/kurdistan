import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './homee/home';
import Erbil from './pages/erbil';
import Resturants from './pages/erbil_content/resturants';
import HistoryContent from './pages/HistoryAndCulture_Components/historyContent';
import Hotel from './pages/erbil_content/Hotel/Hotel';
import Subcity from './pages/erbil_content/Subcity/Subcity';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Culture&History" element={<HistoryContent />} />
        <Route path="/Erbil" element={<Erbil />} />

        <Route path="/resturants" element={<Resturants />} />

        <Route path="/hotels" element={<Hotel />} />

        <Route path="/subcity" element={<Subcity />} />
      </Routes>
    </Router>
  );
}

export default App;
