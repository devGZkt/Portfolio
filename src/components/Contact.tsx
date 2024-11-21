const Contact = () => {
  return (
    <div className="h-screen bg-white flex justify-center items-center p-8 dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-white md:w-1/2 space-y-6">
          <h3 className="text-yellow-500 text-xl">Get in Touch</h3>
          <h1 className="text-5xl font-bold text-black dark:text-white">Contact Me</h1>
          <p className="text-gray-400">
            Feel free to reach out to me for any inquiries or collaborations. I’m always excited about new projects and ideas.
          </p>
              <a
                href="mailto:gabriel.zimmermann4@icloud.com"
                className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-yellow-400 transition duration-300"
                >
              Contact Me Via Email
              </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
