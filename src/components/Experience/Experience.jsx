 
import { FaBriefcase } from 'react-icons/fa'; // You can use any icon library

const experiences = [
  {
    company: 'Connect Agency',
    role: 'Frontend Developer (project-based)',
    location: 'Dhaka, Bangladesh (remote)',
    duration: 'Aug 2024 - Oct 2024',
    description:
      'Focused on creating dynamic user interfaces using React.js and Tailwind CSS for various client projects. Enhanced web performance by implementing best practices and modern design principles. Worked collaboratively in an agile environment to deliver high-quality and responsive web applications.',
  },
  {
    company: 'Auroraxia',
    role: 'Frontend Developer',
    location: 'Dhaka, Bangladesh(remote)',
    duration: 'Nov 2024 - Present',
    description:
      'Spearheading the development of scalable web applications with a focus on user experience and accessibility. Regularly coordinate with cross-functional teams to design and implement front-end features. Actively participate in code reviews and contribute to improving the development workflow.',
  },
];


const Experience = () => {
  return (
    <section className="py-16  text-white">
      <div className="container flex flex-col mx-auto px-4">
        <h2  data-aos="zoom-in"  className="text-3xl font-bold text-center mb-12 text-purple-700 ">
          Experience
        </h2>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8   rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className=" text-gray-400 text-3xl mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold    text-purple-700 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-lg  text-[#513F73] dark:text-purple-700">{exp.role}</p>
                </div>
              </div>
              <p className="   text-black dark:text-purple-400 mb-2">{exp.location}</p>
              <p className="text-gray-600 mb-6">{exp.duration}</p>
              <p className=" text-gray-700 text-lg dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;