import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-6">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-1 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image src="/images/profile.jpg" alt="Makafui Quist" width={192} height={192} className="object-cover" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hello, This is <span className="text-blue-500">Makafui Quist</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed">
    A passionate Electrical and Electronics Engineering student at Academic City University, dedicated to solving real-world problems 
    through innovation and technology. 
    I thrive on challenging projects that push my boundaries and expand my skill set.
</p>

      {/* CTA Button */}
    
    </section>
  );
};

export default Hero;