const Home = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-white md:w-1/2 space-y-6">
          <h3 className="text-yellow-500 text-xl">Welcome to My Portfolio</h3>
          <h1 className="text-5xl font-bold">Hey, There</h1>
          <h1 className='text-white text-3xl'>I'm Gabriel Zimmermann</h1>
          <p className="text-gray-400">
            an aspiring software developer specializing in building modern web applications. I enjoy exploring new technologies, solving complex problems, and delivering efficient solutions.
          </p>
          <div className="flex space-x-4">
            <a
              href="#about"
              className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Learn More About Me
            </a>
            <a
              href="#contact"
              className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-16">
          <img
            src="/path-to-image/cover.png"
            alt="Gabriel Zimmermann"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
