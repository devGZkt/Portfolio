const CV = () => {
    return (
      <div className="h-screen bg-black flex justify-center items-center p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: CV Text */}
          <div className="text-white md:w-1/2 space-y-6">
            <h3 className="text-yellow-500 text-xl">Curriculum Vitae</h3>
            <h1 className="text-5xl font-bold">Gabriel Zimmermann</h1>
            
            {/* Personal Information */}
            <h2 className="text-2xl font-semibold">Personal Information</h2>
            <p className="text-gray-400">
              <strong>Date of Birth:</strong> 29.12.2003, Zürich
            </p>
            <p className="text-gray-400">
              <strong>Address:</strong> Am Pfisterhölzli 28, 8606 Greifensee
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong> 076 302 29 12
            </p>
            <p className="text-gray-400">
              <strong>Nationality:</strong> Swiss, Brazilian
            </p>
  
            {/* Skills Section */}
            <h2 className="text-2xl font-semibold mt-6">Skills</h2>
            <ul className="text-gray-400 list-disc list-inside">
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
  
            {/* Languages */}
            <h2 className="text-2xl font-semibold mt-6">Languages</h2>
            <ul className="text-gray-400 list-disc list-inside">
              <li>German (Native)</li>
              <li>Portuguese (Native)</li>
              <li>English (C1)</li>
              <li>Spanish (B1)</li>
            </ul>
  
            {/* Hobbies */}
            <h2 className="text-2xl font-semibold mt-6">Hobbies</h2>
            <ul className="text-gray-400 list-disc list-inside">
              <li>Reading</li>
              <li>Football</li>
              <li>Gaming</li>
              <li>Jogging</li>
            </ul>
          </div>
  
          {/* Right Side: Image */}
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
  
  export default CV;
  