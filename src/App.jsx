import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './homee/home';
import Erbil from './pages/erbil';
import Resturants from './pages/erbil_content/resturants';
import HistoryContent from './pages/historyContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Culture&History" element={<HistoryContent />} />
        <Route path="/Erbil" element={<Erbil />} />

        <Route path="/resturants" element={<Resturants />} />
      </Routes>
    </Router>
  );
}

export default App;
