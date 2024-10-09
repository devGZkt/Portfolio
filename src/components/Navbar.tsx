import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkmodeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex flex-col">
          <p className="text-lg font-bold text-black dark:text-white">Gabriel Zimmermann</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Application Developer in Training</p>
        </div>

        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cv" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
              CV
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
              Kontakt
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="text-lg font-medium text-gray-800 dark:text-white hover:text-yellow-500">
              About Me
            </Link>
          </li>
        </ul>

        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
