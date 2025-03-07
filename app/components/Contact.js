'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Your personal contact details
  const personalInfo = {
    email: 'quistmakafui367@gmail.com',
    phone: '+233 241032673',
  };

  // Social links
  const contactLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/makafui-quist/' },
    { platform: 'GitHub', url: 'https://github.com/Nekota279' },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Placeholder for form submission logic
    setStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-4">Contact Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          {/* Add something  */}
        </p>

        {/* Contact Info */}
        <div className="mt-6 text-gray-300">
          <p><strong className="text-blue-400">Email:</strong> {personalInfo.email}</p>
          <p><strong className="text-blue-400">Phone:</strong> {personalInfo.phone}</p>

          <div className="flex justify-center gap-6 mt-4">
            {contactLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-400 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-400 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-blue-400 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition text-white font-bold rounded-md"
          >
            Submit
          </button>
        </form>

        {status && <p className="text-blue-400 mt-4">{status}</p>}
      </div>
    </section>
  );
};
export default Contact