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
          <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed mx-auto">
           I am a Ghanaian Electrical and Electronics Engineering student at Academic City University with a passion for innovation and problem-solving.
           Over the past three years, I have gained hands-on experience in assembling and disassembling electrical components, and I have a solid understanding of the core concepts in my field.
            My goal is to use my skills to create impactful solutions that improve lives and make the world a better place.
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

