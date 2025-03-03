import React from 'react'


  
    const projects = [
       
        {
          title: "Secure Login System",
          description: "A user authentication system with JWT and bcrypt for secure password hashing.",
          tech: ["Node.js", "Express", "MongoDB", "JWT"],

          link: "https://github.com/Nekota279",
          image: "/secure-login-preview.png"
        },
        
     ];
        export default function Projects()  {
        return
          <section id="projects" className="py-20 bg-dark text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue">Projects</h2>
              <p className="text-lg mt-2">Here are some of the projects I've worked on.</p>
            </div>
      
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <div className="mt-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue text-white px-2 py-1 rounded text-sm mr-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="mt-4 inline-block text-blue hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ;
    }
// To make unreachable, put a bracket after return statement and before ; in line 49