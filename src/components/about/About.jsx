import belal from "../../assets/belal.jpg";
const About = () => {
  return (
    <section className="max-w-7xl mx-auto  p-4  ">
      <h2 data-aos="zoom-in" className="text-3xl text-center font-bold text-purple-700 mb-4">
        ABOUT ME
      </h2>
      <p data-aos="zoom-in" className="text-gray-700 text-lg dark:text-gray-300 text-center mb-8">
        As a front-end developer, I thrive on turning complex design concepts
        into functional, aesthetically pleasing web pages. My attention to
        detail and commitment to user-centric design ensure that every project I
        work on meets both client and user expectations.
      </p>
      <div  className="flex flex-wrap gap-5 items-start justify-center">
        <div data-aos="fade-left" className="w-full sm:w-80">
          <img
            src={belal}
            alt="Profile"
            className="w-full rounded-lg duration-100 ease-in hover:scale-90 hover:rotate-6"
          />
        </div>
        <div className="flex-1 min-w-[300px]">
          <h3 data-aos="zoom-in" className="text-xl text-purple-800 dark:text-purple-600 mb-4 font-semibold">Front End Developer</h3>
          <p data-aos="fade-left" className="text-gray-700 text-lg dark:text-gray-300 mb-6">
            I am a dedicated front-end developer with a passion for crafting
            intuitive and dynamic user interfaces. My expertise lies in
            translating design mockups into seamless, responsive websites that
            provide an optimal user experience across all devices.
          </p>
          <div  data-aos="zoom-in"  className="flex flex-wrap gap-4">
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">Birthday:</strong>
              <span className="text-gray-600">29 March, 2006</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">Language:</strong>
              <span className="text-gray-600">
                Bangla, Hindi, English, Urdu
              </span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">Phone:</strong>
              <span className="text-gray-600">01568885065</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">City:</strong>
              <span className="text-gray-600">Bogura, Bangladesh</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">Age:</strong>
              <span className="text-gray-600">18</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">Degree:</strong>
              <span className="text-gray-600">HSC</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">Email:</strong>
              <span className="text-gray-600">uddinbella473@gmail.com</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-between">
              <strong className="text-purple-500">Gender:</strong>
              <span className="text-gray-600">Male</span>
            </div>
          </div>
          <p   data-aos="fade-right" className="text-gray-700 text-lg dark:text-gray-300 mt-6">
            Proficient in HTML, CSS, and JavaScript, I excel at creating
            interactive and engaging web applications. I continually stay
            updated with the latest industry trends and technologies, ensuring
            that my work remains cutting-edge and effective in solving modern
            web development challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
