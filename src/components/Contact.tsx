const Contact = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-white md:w-1/2 space-y-6">
          <h3 className="text-yellow-500 text-xl">Get in Touch</h3>
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="text-gray-400">
            Feel free to reach out to me for any inquiries or collaborations. I’m always excited about new projects and ideas.
          </p>
              <a
                href="mailto:gabriel.zimmermann4@icloud.com"
                className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-yellow-400 transition duration-300"
                >
              Contact me
              </a>
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

export default Contact;
