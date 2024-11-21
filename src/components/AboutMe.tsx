const AboutMe = () => {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: About Me Text */}
          <div className="text-white md:w-1/2 space-y-6">
            <h3 className="text-yellow-500 text-xl">Hello, Welcome</h3>
            <h1 className="text-5xl font-bold">I’m Gabriel Zimmermann</h1>
            <p className="text-gray-400">
              I am currently based in Switzerland, pursuing my passion for software development. With a background in application development, I specialize in building web-based applications, always eager to learn and apply new technologies. 
            </p>
            <p className="text-gray-400">
              I am completing a two-year program as an Application Developer and have experience with HTML, CSS, JavaScript, React, Node.js, Express and MongoDB. I enjoy working on creative projects, solving technical problems, and collaborating with like-minded professionals.
            </p>
            <p className="text-gray-400">
              Outside of coding, I enjoy learning about cutting-edge tech trends and improving my skills in Linux server infrastructure and clustering technologies.
            </p>
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
  
  export default AboutMe;
  