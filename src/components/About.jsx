import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import slImage from "../img/SL.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="About" className="container mx-auto px-4 py-16">
      <h2
        className="mt-10 text-4xl font-bold text-center mb-12"
        data-aos="fade-down"
      >
        <strong>ABOUT</strong>
      </h2>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full md:w-1/2 px-4 mb-8" data-aos="fade-right">
          <div className="images">
            <div className="relative overflow-hidden shadow-lg rounded-lg">
              <img
                src={slImage}
                alt="Recovery Capital"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-15 transition-opacity duration-300 hover:opacity-0"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8" data-aos="fade-left">
          <div className="about space-y-4">
            <div data-aos="fade-up" data-aos-delay="100">
              <button
                className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                  activeSection === "what"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => toggleSection("what")}
              >
                <h3 className="text-2xl font-bold">
                  What is Recovery Capital?
                </h3>
              </button>
              {activeSection === "what" && (
                <div
                  className="mt-4 p-4 bg-white rounded-lg shadow"
                  data-aos="fade-in"
                >
                  <p className="text-gray-600 mb-4">
                    BREADTH AND DEPTH OF INTERNAL AND EXTERNAL RESOURCES THAT
                    CAN BE DRAWN UPON TO INITIATE AND SUSTAIN RECOVERY FROM
                    SEVERE AOD PROBLEMS
                  </p>
                  <ul className="list-disc list-inside">
                    <li data-aos="fade-left" data-aos-delay="100">
                      Personal - an individual's physical and human capital
                    </li>
                    <li data-aos="fade-left" data-aos-delay="200">
                      Family/Social - intimate relationships (friends / family /
                      fellowship)
                    </li>
                    <li data-aos="fade-left" data-aos-delay="300">
                      Community - attitudes, policies, and resources to help
                      individuals resolve substance use disorders
                    </li>
                    <li data-aos="fade-left" data-aos-delay="400">
                      Cultural - resonate with individuals cultural and
                      faith-based beliefs
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <button
                className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                  activeSection === "benefits"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => toggleSection("benefits")}
              >
                <h3 className="text-2xl font-bold">
                  Benefits of "Recovery Capital"
                </h3>
              </button>
              {activeSection === "benefits" && (
                <div
                  className="mt-4 p-4 bg-white rounded-lg shadow"
                  data-aos="fade-in"
                >
                  <ul className="list-disc list-inside">
                    <li data-aos="fade-left" data-aos-delay="100">
                      Can help sustain recovery for individuals and families
                    </li>
                    <li data-aos="fade-left" data-aos-delay="200">
                      Reduce the risks of returning to use by increasing a
                      person's support system
                    </li>
                    <li data-aos="fade-left" data-aos-delay="300">
                      Can determine the success of natural and assisted recovery
                    </li>
                    <li data-aos="fade-left" data-aos-delay="400">
                      Can improve coping strategies
                    </li>
                    <li data-aos="fade-left" data-aos-delay="500">
                      Can enhance the quality of life in long-term recovery
                    </li>
                    <li data-aos="fade-left" data-aos-delay="600">
                      Can end addiction careers
                    </li>
                    <li data-aos="fade-left" data-aos-delay="700">
                      Opportunity to be mindful of increasing resources to
                      marginalized communities
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr
          className="mt-20 border-t-2 border-gray-300 w-3/4 mx-auto"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>
    </section>
  );
};

export default About;
