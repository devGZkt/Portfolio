import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CV from './components/CV';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        {/* unmached routes */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
