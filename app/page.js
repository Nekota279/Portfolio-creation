import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Project from './components/Project'; // Ensure this path is correct
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* Rendering components in the app */}
      <Navbar/>
      <Hero />
      <Experience title={"Hello"} />
      <Project />  {/* Use the Project component here */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;