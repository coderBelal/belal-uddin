import React, { useState } from 'react';

const myProjects = [
  {
    title: 'কুরআনুল কারীম',
    description: 'An interactive digital Quran platform with easy navigation for reading and understanding the Quran.',
    image: 'https://i.postimg.cc/rmm2bfVY/Screenshot-2024-09-27-203711.png',
    liveLink: 'https://the-islamic-bd.vercel.app/',
    codeLink: 'https://github.com/dev-hmyousuf/the_islamic_bd',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Shofy E-com',
    description: 'A simple e-commerce app with shopping features, built with React, Context API, and Tailwind CSS.',
    image: 'https://i.postimg.cc/Z5xD5q0j/Screenshot-2024-11-11-191655.png',
    liveLink: 'https://shofy-lilac.vercel.app/',
    codeLink: 'https://github.com/coderBelal/shofy',
    technologies: ['React', 'Tailwind CSS', 'Context API'],
  },
  {
    title: 'Expense Tracker',
    description: 'An app for tracking daily expenses, allowing users to add, edit, and delete entries.',
    image: 'https://i.postimg.cc/3RzPSGzc/Screenshot-2024-09-30-000257.png',
    liveLink: 'https://expense-tracker-one-pink-15.vercel.app/',
    codeLink: 'https://github.com/coderBelal/Expense-Tracker/tree/main',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Blog',
    description: 'A blog platform for exploring and sharing articles across various topics.',
    image: 'https://i.postimg.cc/HxVSz4zP/Screenshot-2024-11-11-191951.png',
    liveLink: 'https://blog-website-seven-steel.vercel.app/',
    codeLink: 'https://github.com/coderBelal/blog-website',
    technologies: ['React', 'Tailwind CSS'],
  },
  
];

const teamProjects = [
  {
    title: 'Spaajman',
    description: 'A luxury spa and wellness platform with booking features, built with modern web technologies.',
    image: 'https://i.postimg.cc/dQyM7WyP/Screenshot-2024-09-30-000210.png',
    liveLink: 'https://sparlax.com/',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState('myProjects'); // State to track the active tab

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <div data-aos="fade-down" key={index} className="group w-full h-[350px] p-7 mx-auto max-w-7xl">
        <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
            />
            <h2 className="text-[1.5rem] text-purple-700 dark:text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold absolute bottom-5 left-5">
              {project.title}
            </h2>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
            <h2 className="text-[1.5rem] text-purple-700 dark:text-white font-bold md:mb-0">{project.title}</h2>
            <p className="text-gray-700 text-lg dark:text-gray-300">{project.description}</p>
            <div className="flex justify-between mt-4">
              <a href={project.liveLink} className="bg-purple-700 px-3 py-2 text-white hover:text-black rounded-lg shadow hover:bg-purple-200 text-lg tracking-wide font-semibold">
                Live
              </a>
              <a href={project.codeLink} className="bg-purple-200 px-3 py-2 text-black rounded-lg hover:text-white shadow hover:bg-purple-600 text-lg tracking-wide font-semibold">
                View
              </a>
            </div>
            {/* Technology list */}
            <div className="flex flex-wrap mt-4 gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="project-section mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">My Project</h2>
      {/* Tabs for My Projects and Team Projects */}
      <div className="tabs text-center mb-8">
        <button 
          className={`py-2 px-4 mx-2 ${activeTab === 'myProjects' ? 'bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 font-semibold text-lg tracking-wide' : 'rounded-lg bg-purple-200 font-semibold text-black dark:text-black mt-2 tracking-wider'}`}
          onClick={() => setActiveTab('myProjects')}
        >
          My Projects
        </button>
        <button
          className={`py-2 px-4 mx-2 ${activeTab === 'teamProjects' ? 'bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 text-lg tracking-wide font-semibold' : 'rounded-lg bg-purple-200 font-semibold text-black dark:text-black mt-2 tracking-wider'}`}
          onClick={() => setActiveTab('teamProjects')}
        >
          Team Projects
        </button>
      </div>

      {/* Conditionally render projects based on active tab */}
      {activeTab === 'myProjects' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects(myProjects)}
        </div>
      )}

      {activeTab === 'teamProjects' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects(teamProjects)}
        </div>
      )}
    </div>
  );
};

export default Project;
