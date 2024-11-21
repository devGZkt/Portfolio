import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen bg-white flex justify-center items-center p-8 dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-white md:w-1/2 space-y-6">
          <h3 className="text-yellow-500 text-xl">Welcome to My Portfolio</h3>
          <h1 className="text-black text-5xl font-bold dark:text-white">Hey, There</h1>
          <h1 className='text-black text-3xl dark:text-white'>I'm Gabriel Zimmermann</h1>
          <p className="text-gray-400">
            an aspiring software developer specializing in building modern web applications. I enjoy exploring new technologies, solving complex problems, and delivering efficient solutions.
          </p>
          <div className="flex space-x-4">
            <Link to="/aboutme"
            className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-gray-600 transition duration-300">
              Learn More About Me
            </Link>
            <Link to="/contact" className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-gray-600 transition duration-300">
            Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
