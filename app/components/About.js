import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* Name Heading */}
        <h1 className="text-4xl md:text-4xl font-extrabold text-blue-500">Makafui</h1>

        {/* Subheading */}
        <h2 className="text-lg md:text-xl text-gray-300 mt-2">
          Electrical and Electronics Engineer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mt-6 leading-relaxed">
          I am interested in learning all things that can further enhance my skills to be able to break free from the constraints
          of society and learn to live and be happy, all while spreading joy and help make the world a better place.
        </p>
        
        {/* Skills Section */}
        <div className="mt-6">
          <h3 className="text-4xl md:text-4xl font-extrabold text-blue-500">Skills</h3>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
          <strong className="text-white">Python, Computer-Aided Design, Next.js</strong>
          </p>
        </div>

        {/* Contact Section
        <div className="mt-6">
          <h3 className="text-4xl md:text-4xl font-extrabold text-blue-500">Contact</h3>
          <p className="text-lg md:text-xl text-gray-300 mt-2">quistmakafui367@gmail.com</p>
          <p className="text-lg md:text-xl text-gray-300">0241032673</p>
        </div> */}
      </div>
    </section>
  );
};
  

export default About;