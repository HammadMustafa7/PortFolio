// import React from 'react';
// import { Github, ArrowRight } from 'lucide-react';

// const ProjectsPage = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog management, shopping cart functionality, and secure payment processing. Implemented responsive design principles and optimized performance through lazy loading and caching strategies.",
//       image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       github: "https://github.com/username/e-commerce-platform"
//     },
//     {
//       title: "Weather Dashboard",
//       description: "Real-time weather monitoring application that provides detailed forecasts and historical weather data visualization. Integrated with multiple weather APIs to ensure accurate data. Includes features like location-based weather updates and severe weather alerts.",
//       image: "/api/placeholder/400/250",
//       github: "https://github.com/username/weather-dashboard"
//     },
//     {
//       title: "Task Management System",
//       description: "A collaborative project management tool with features for task creation, assignment, and tracking. Implements drag-and-drop functionality for task organization and real-time updates using WebSocket technology.",
//       image: "/api/placeholder/400/250",
//       github: "https://github.com/username/task-manager"
//     },
//     {
//       title: "Weather Dashboard",
//       description: "Real-time weather monitoring application that provides detailed forecasts and historical weather data visualization. Integrated with multiple weather APIs to ensure accurate data. Includes features like location-based weather updates and severe weather alerts.",
//       image: "/api/placeholder/400/250",
//       github: "https://github.com/username/weather-dashboard"
//     },
//     {
//       title: "Task Management System",
//       description: "A collaborative project management tool with features for task creation, assignment, and tracking. Implements drag-and-drop functionality for task organization and real-time updates using WebSocket technology.",
//       image: "/api/placeholder/400/250",
//       github: "https://github.com/username/task-manager"
//     },
//     {
//       title: "Weather Dashboard",
//       description: "Real-time weather monitoring application that provides detailed forecasts and historical weather data visualization. Integrated with multiple weather APIs to ensure accurate data. Includes features like location-based weather updates and severe weather alerts.",
//       image: "/api/placeholder/400/250",
//       github: "https://github.com/username/weather-dashboard"
//     },
//     {
//       title: "Task Management System",
//       description: "A collaborative project management tool with features for task creation, assignment, and tracking. Implements drag-and-drop functionality for task organization and real-time updates using WebSocket technology.",
//       image: "/api/placeholder/400/250",
//       github: "https://github.com/username/task-manager"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black p-8">
//       <div className="max-w-full mx-auto">
//         <h1 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h1>

//         <div className="flex flex-wrap justify-center gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="relative flex flex-col items-center hover:border-none border-white border bg-transparent w-[20%] h-[470px] transition-all rounded-lg overflow-hidden shadow-lg transform duration-500 hover:bg-gradient-to-tr hover:from-[#d2232a] hover:via-[#a33f91] hover:to-[#303188] hover:text-white hover:shadow-xl pt-20 hover:pt-8 group">

//               <div className='w-full flex justify-center'>
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-[90%] h-48 object-cover rounded-lg "
//                 />
//               </div>

//               <div className="p-6 relative">
//                 <h3 className="text-base font-semibold mb-3 text-white">{project.title}</h3>
//                 <p className="text-white mb-4 line-clamp-4">
//                   {project.description}
//                 </p>
//               </div>

//               {/* GitHub Button - Now Works on Hover */}
//               <a
//                 href={project.github}
//                 className="w-auto whitespace-nowrap absolute opacity-0 inline-flex items-center justify-center gap-3 pl-2 py-3 bg-black  group-hover:opacity-90 hover:bg-white hover:text-black text-white font-semibold rounded-xl transition-all duration-300 ease-linear bottom-4 left-1/2 -translate-x-1/2"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Github size={24} />
//                 <span >View on GitHub</span>
//                 <div className=' rounded-full p-1.5'>
//                   <ArrowRight size={20} />
//                 </div>
//               </a>
//             </div>


//           ))}
//         </div>
//       </div>
//     </div >
//   );
// };

// export default ProjectsPage;

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
      title: "Task Management",
      description: "A collaborative project management tool with features for task creation, assignment, and tracking.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/task-manager"
    },
    {
      title: "Social Analytics",
      description: "Advanced analytics platform for social media monitoring and reporting.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/social-analytics"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio creation tool for developers and designers.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/portfolio"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and analytics.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/ai-chat"
    }
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

  return (
    <div id='projects' className=" font-saira1 relative min-h-screen bg-black py-8 p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 lg:pt-16 mb-12 md:mb-16 text-center">My Projects</h1>
        
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
                className="w-auto whitespace-nowrap absolute opacity-0 inline-flex items-center justify-center gap-3 pl-2 py-3 bg-black group-hover:opacity-90 hover:bg-white hover:text-black text-white font-semibold rounded-xl transition-all duration-300 ease-linear bottom-4 left-1/2 -translate-x-1/2"
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

        {projects.length > projectsPerRow && (
          <div className={`flex ${projects.length < projectsPerRow ? 'hidden' : ''}  justify-center mt-12`}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              <ChevronDown 
                className={`transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;