import { useState } from "react";

const skills = [
 
  { title: "Tailwind", img: "https://i.postimg.cc/Xq5HGY5w/tailwind.png" },
  { title: "Sass", img: "https://i.postimg.cc/pT4cLFmW/sass.png" },
  { title: "JavaScript", img: "https://i.postimg.cc/BZjdfqjZ/js.png" },
  { title: "React", img: "https://i.postimg.cc/T3JsJ140/redux.png" },
  { title: "Redux", img: "https://i.postimg.cc/SsJt4rN1/redux-B2yjgmpq.png" },
  { title: "Zustand", img: "https://i.postimg.cc/kGn2W6qV/zustand.png" },
  { title: "Next JS", img: "https://i.postimg.cc/gkRQrNyf/next.png" },
  { title: "Firebase", img: " https://i.postimg.cc/d1vX9TXb/logo-vertical.png" },
];

const otherSkills = [
  { title: "Netlify", img: "https://i.postimg.cc/sfbbVtWY/netlify.png" },
  { title: "Git", img: "https://i.postimg.cc/W3H67cVX/git.png" },
  { title: "VSCode", img: "https://i.postimg.cc/TY8H8n8Q/vscode.png" },
  { title: "GitHub", img: "https://i.postimg.cc/0jKGWX2x/github.jpg" },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState("frontEnd");

  const renderSkills = (skillsArray) => (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center p-4">
    {skillsArray.map((skill, index) => (
      <div
        key={index}
        data-aos="fade-up" // Animation added for each skill card
        className="flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-xl p-6 transform hover:-translate-y-2"
      >
        <img
          src={skill.img}
          alt={skill.title}
          className="h-24 w-24 rounded-full mb-4 shadow-md"
        />
        <h2 className="text-[1.5rem] font-semibold text-purple-700 dark:text-white">
          {skill.title}
        </h2>
      </div>
    ))}
  </div>
  );

  return (
    <div className="max-w-7xl mx-auto text-center mt-10">
                     <h2 className="text-3xl font-bold text-center mb-12 text-purple-700 ">
 My  Skills
        </h2>
      <div className="tabs text-center mb-8">
        <button 
          className={`py-2 px-4 mx-2 ${activeTab === 'frontEnd' ? ' bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 font-semibold text-lg tracking-wide' : ' rounded-lg bg-purple-200     font-semibold    text-black dark:text-black mt-2 tracking-wider'}`}
          onClick={() => setActiveTab('frontEnd')}
        >
          Front End
        </button>
        <button
          className={`py-2 px-4 mx-2 ${activeTab === 'otherSkills' ? ' bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 text-lg tracking-wide  font-semibold' : ' rounded-lg bg-purple-200 font-semibold     text-black dark:text-black mt-2 tracking-wider'}`}
          onClick={() => setActiveTab('otherSkills')}
        >
          Other
        </button>
      </div>


      {activeTab === "frontEnd" ? renderSkills(skills) : renderSkills(otherSkills)}
    </div>
  );
};

export default Skill;
