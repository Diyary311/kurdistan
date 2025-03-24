import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './homee/home';
import Erbil from './pages/erbil';
import HistoryContent from './pages/historyContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Culture&History" element={<HistoryContent />} />
        <Route path="/Erbil" element={<Erbil />} />
      </Routes>
    </Router>
  );
}

export default App;
