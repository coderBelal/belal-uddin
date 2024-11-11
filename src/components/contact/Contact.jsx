import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing an icon for the button
 
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "63a04ffa-b8be-4a0d-bc8e-c001f2f1a80b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); 
      } else {
        console.log("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setResult("There was an error submitting the form.");
    }
  };

  return (
    <div className="min-h-screen mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-center    px-4">
      <div className="max-w-5xl w-full   p-8 rounded-lg  ">
        <h2  data-aos="zoom-in"  className=" text-3xl font-bold text-center mb-12 text-purple-700 ">
          Get in Touch
        </h2>
        <form data-aos="fade-in" onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2   border  font-semibold border-purple-600 rounded-lg    "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2   border  font-semibold border-purple-600 rounded-lg   "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="contact">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                required
                className="w-full px-4 py-2     border  font-semibold border-purple-600 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required 
                className="w-full px-4 py-2  border  font-semibold border-purple-600 rounded-lg focus:outline-none   "
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message"
              required
              className="w-full h-40 px-4 py-2  b   font-semibold border border-purple-600 rounded-lg focus:outline-none  "
            ></textarea>
          </div>
          <button
            type="submit"
            className="    flex items-center px-6 py-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 text-lg tracking-wide"
          >
            <FaPaperPlane className="mr-2" /> SUBMIT
          </button>
        </form>
        <span className="block mt-4 text-center text-purple-700 dark:text-white ">{result}</span>
      </div>
      <div  data-aos="fade-out" className="max-w-5xl w-full   mt-8   dark:text-white text-gray-800">
      <h3 data-aos="zoom-in"  className="text-2xl font-bold text-center mb-6 text-purple-700">Contact Information</h3>
        <div className="space-y-16 ml-7">
          <div className="flex items-center">
            <FaPhoneAlt className="text-purple-700 mr-3" />
            <span className="text-lg font-semibold">Phone:</span>
            <span className="ml-2">01568885065</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-purple-700 mr-3" />
            <span className="text-lg font-semibold">Email:</span>
            <span className="ml-2">coderbelal99@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-purple-700 mr-3" />
            <span className="text-lg font-semibold">Address:</span>
            <span className="ml-2">Bogura</span>
          </div>
        </div>
      </div>
    </div>
  );
}