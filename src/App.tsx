import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CV from './components/CV';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    {/* You can use the Navbar component here if it includes navigation links */}
    <Navbar />

    {/* If you want to use the navigation directly here */}
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cv">CV</Link></li> {/* Added link to CV page */}
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  </Router>
);
}


export default App;
