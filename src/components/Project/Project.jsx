
import React, { useState, useEffect } from 'react';
import { Github, ArrowRight, ChevronDown } from 'lucide-react';

const ProjectsPage = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog management, shopping cart functionality, and secure payment processing.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/ecommerce"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring application that provides detailed forecasts and historical weather data visualization.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/weather-dashboard"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog management, shopping cart functionality, and secure payment processing.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/ecommerce"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring application that provides detailed forecasts and historical weather data visualization.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/weather-dashboard"
    },
    

  ];
  const live_projects = [

  ];

  // Calculate how many projects to show in one row (20% width means 5 per row)
  const [projectsPerRow, setProjectsPerRow] = useState(4);

  useEffect(() => {
    const updateProjectsPerRow = () => {
      if (window.innerWidth >= 1024) {
        setProjectsPerRow(4);
      } else if (window.innerWidth >= 768) {
        setProjectsPerRow(3);
      } else {
        setProjectsPerRow(2);
      }
    };

    // Run on mount
    updateProjectsPerRow();

    // Listen for window resize
    window.addEventListener("resize", updateProjectsPerRow);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateProjectsPerRow);
  }, []);


  const visibleProjects = showAll ? projects : projects.slice(0, projectsPerRow);
  const liveprojects = showAll ? live_projects : live_projects.slice(0, projectsPerRow);

  return (
    <>
      <div id='projects' className=" font-saira relative min-h-screen bg-black py-10 md:py-8 p-6 md:p-8 lg:p-8">
        <div className="max-w-full mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 lg:pt-16 mb-12 md:mb-16 text-center">My Projects</h1>
          {visibleProjects.length > 0 ? (
              <div className={`flex flex-wrap justify-center  gap-6 lg:gap-8`}>
            
              {visibleProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center hover:border-none border-white border bg-transparent w-[90%] xsm:w-[70%] sm:w-[45%] md:w-[30%] lg:w-[22.5%] h-[470px] transition-all rounded-lg overflow-hidden shadow-lg transform duration-500 hover:bg-gradient-to-tr hover:from-[#d2232a] hover:via-[#a33f91] hover:to-[#303188] hover:text-white hover:shadow-xl pt-20 hover:pt-8 group"
                >
                  <div className='w-full flex justify-center'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[90%] h-48 object-cover rounded-lg"
                    />
                  </div>
  
                  <div className="p-6 relative">
                    <h3 className="text-base font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-white mb-4 line-clamp-4">
                      {project.description}
                    </p>
                  </div>
  
                  <a
                    href={project.github}
                    className="w-auto hidden group-hover:inline-flex  whitespace-nowrap absolute opacity-0  items-center justify-center gap-3 pl-2 py-3 bg-black group-hover:opacity-90 hover:bg-white hover:text-black text-white font-semibold rounded-xl transition-all duration-300 ease-linear bottom-4 left-1/2 -translate-x-1/2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                    <span>View on GitHub</span>
                    <div className='rounded-full p-1.5'>
                      <ArrowRight size={20} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
            ) : (
              <p className="text-white text-2xl text-center">No Projects found.</p>
            )}
          

          {projects.length > projectsPerRow && (
            <div className={`flex ${projects.length < projectsPerRow ? 'hidden' : ''}  justify-center mt-12`}>
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>{showAll ? 'Show Less' : 'Show More'}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''
                    }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className=" font-saira relative  bg-black py-8 md:py-8 p-4 md:p-4">
        <div className="max-w-full mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 lg:pt-16 mb-12 md:mb-16 text-center">Live Projects</h1>
          {liveprojects.length === 0 ? (
            <p className="text-white text-2xl text-center">No live Projects found.</p>
          ) : (
            <div className="flex  flex-wrap justify-center gap-6 lg:gap-8">
              {liveprojects.map((project, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center hover:border-none border-white border bg-transparent w-[90%] xsm:w-[70%] sm:w-[45%] md:w-[30%] lg:w-[22.5%] h-[470px] transition-all rounded-lg overflow-hidden shadow-lg transform duration-500 hover:bg-gradient-to-tr hover:from-[#d2232a] hover:via-[#a33f91] hover:to-[#303188] hover:text-white hover:shadow-xl pt-20 hover:pt-8 group"
                >
                  <div className='w-full flex justify-center'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[90%] h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="p-6 relative">
                    <h3 className="text-base font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-white mb-4 line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.github}
                    className="w-auto hidden group-hover:inline-flex whitespace-nowrap absolute opacity-0 items-center justify-center gap-3 pl-2 py-3 bg-black group-hover:opacity-90 hover:bg-white hover:text-black text-white font-semibold rounded-xl transition-all duration-300 ease-linear bottom-4 left-1/2 -translate-x-1/2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                    <span>View on GitHub</span>
                    <div className='rounded-full p-1.5'>
                      <ArrowRight size={20} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}


          {projects.length > projectsPerRow && (
            <div className={`flex ${live_projects.length < projectsPerRow ? 'hidden' : ''}  justify-center mt-12`}>
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>{showAll ? 'Show Less' : 'Show More'}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''
                    }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;