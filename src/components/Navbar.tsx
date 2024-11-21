import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkmodeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Name and Title */}
        <div className="flex flex-col">
          <p className="text-lg font-bold text-black dark:text-white">Gabriel Zimmermann</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Application Developer in Training</p>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
            Home
          </Link>
          <Link to="/cv" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
            CV
          </Link>
          <Link to="/contact" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
            Contact
          </Link>
          <Link to="/aboutme" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
            About Me
          </Link>
        </div>

        {/* Right: Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />

          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link
                to="/"
                className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cv"
                className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/aboutme"
                className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
