const CV = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <div className="text-white md:w-1/2 space-y-8 px-4 sm:px-8">
          <h3 className="text-yellow-400 text-lg tracking-wider uppercase">
            Curriculum Vitae
          </h3>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Gabriel Zimmermann
          </h1>

          <div>
            <a href="" className="bg-yellow-500 text-black text-lg py-2 px-6 rounded-lg transistion duration-300 transform hover:bg-yellow-600 hover:scale-105">Download CV</a>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p className="text-gray-400">
              <span className="font-semibold">Date of Birth:</span> 29.12.2003, Zürich
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Address:</span> Am Pfisterhölzli 28, 8606 Greifensee
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Phone:</span> 076 302 29 12
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Nationality:</span> Swiss, Brazilian
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold mt-6">Skills</h2>
            <ul className="text-gray-400 list-disc list-inside space-y-2">
              <li>Communication</li>
              <li>Flexibility</li>
              <li>Teamwork</li>
              <li>Problem-Solving</li>
              <li>Adaptability</li>
              <li>Attention to Detail</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
              <li>Quick Learning</li>
              <li>Technical Troubleshooting</li>
              <li>Creativity in Solution Design</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold mt-6">Languages</h2>
            <ul className="text-gray-400 list-disc list-inside space-y-2">
              <li>German (Native)</li>
              <li>Portuguese (Native)</li>
              <li>English (C1)</li>
              <li>Spanish (B1)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold mt-6">Hobbies</h2>
            <ul className="text-gray-400 list-disc list-inside space-y-2">
              <li>Reading</li>
              <li>Football</li>
              <li>Gaming</li>
              <li>Jogging</li>
            </ul>
          </div>
        </div>

        <div className="order-last md:order-none mt-8 md:mt-0 md:w-1/2">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="/path-to-image/cover.png"
              alt="Gabriel Zimmermann"
              className="w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;


/*
const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 flex justify-center items-center p-4 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <div className="text-white dark:text-black md:w-1/2 space-y-8 px-4 sm:px-8">
          <h3 className="text-yellow-400 text-lg tracking-wider uppercase">
            Curriculum Vitae
          </h3>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Gabriel Zimmermann
          </h1>


          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p className="text-gray-300 dark:text-gray-700">
              <span className="font-semibold">Date of Birth:</span> 29.12.2003, Zürich
            </p>
            <p className="text-gray-300 dark:text-gray-700">
             <span className="font-semibold">Address:</span> Am Pfisterhölzli 28, 8606 Greifensee
            </p>
            <p className="text-gray-300 dark:text-gray-700">
              <span className="font-semibold">Phone:</span> 076 302 29 12
            </p>
            <p className="text-gray-300 dark:text-gray-700">
              <span className="font-semibold">Nationality:</span> Swiss, Brazilian
            </p>
          </div>


          <div className="space-y-4">
            <h2 className="text-xl font-semibold mt-6">Skills</h2>
            <ul className="text-gray-300 dark:text-gray-700 list-disc list-inside space-y-2">
              <li>Communication</li>
              <li>Flexibility</li>
              <li>Teamwork</li>
              <li>Problem-Solving</li>
              <li>Adaptability</li>
              <li>Attention to Detail</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
              <li>Quick Learning</li>
              <li>Technical Troubleshooting</li>
              <li>Creativity in Solution Design</li>
            </ul>
          </div>


          <div className="space-y-4">
            <h2 className="text-xl font-semibold mt-6">Languages</h2>
            <ul className="text-gray-300 dark:text-gray-700 list-disc list-inside space-y-2">
              <li>German (Native)</li>
              <li>Portuguese (Native)</li>
              <li>English (C1)</li>
              <li>Spanish (B1)</li>
            </ul>
          </div>


          <div className="space-y-4">
            <h2 className="text-xl font-semibold mt-6">Hobbies</h2>
            <ul className="text-gray-300 dark:text-gray-700 list-disc list-inside space-y-2">
              <li>Reading</li>
              <li>Football</li>
              <li>Gaming</li>
              <li>Jogging</li>
            </ul>
          </div>
        </div>


        <div className="order-last md:order-none mt-8 md:mt-0 md:w-1/2">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="/path-to-image/cover.png"
              alt="Gabriel Zimmermann"
              className="w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
*/