import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/App.css";
import backgroundImage from "../img/business-05.jpg";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      id="Home"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="min-h-screen bg-black bg-opacity-30 flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="container mx-auto mt-10 py-10 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Recovery Capital STL Inc.
          </h1>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            501(c)(3) Organization
          </h2>
        </div>

        {/* Content in Semi-Transparent Boxes */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div
            className="p-6 rounded-lg"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h3
              className="text-xl text-white mb-16"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              We are a Group of individuals Enhancing the Recovery Capital in St
              Louis providing Funding and Sponsorship for:
            </h3>

            <div
              className="flex justify-center space-y-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300 mx-auto"
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                11th Step/Spirituality Panel Flyer
              </button>
            </div>
          </div>

          <div
            className="p-6 rounded-lg"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <ul className="text-white text-lg mb-6">
              {[
                "Recovery Community Centers",
                "Treatment and Sober Recovery Housing Scholarships",
                "Events (including annual Lake of Dreams Picnic",
                "Education",
                "Wellness Opportunities",
              ].map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={200 + index * 100}
                >
                  {item}
                </li>
              ))}
            </ul>

            <p
              className="text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Through individual and group fundraising, Improving the lives of
              individuals and families affected by addiction and mental health
              disorders, and the greater community.
            </p>

            <a
              href="https://www.paypal.com/donate/?hosted_button_id=TGRZESH5PQKVQ"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Paypal Donate
            </a>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">ACA/FA Flyer</h2>
        <iframe
          src={`${process.env.PUBLIC_URL}/Flyers/11th_Step.pdf`}
          width="100%"
          height="500px"
          title="ACA/FA Flyer"
        ></iframe>
        <a
          href={`${process.env.PUBLIC_URL}/Flyers/RC_Workshop.pdf`}
          download="Recovery_Capital_STL_Workshop_9.pdf"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Download Flyer
        </a>
      </Modal>
    </div>
  );
};

export default Home;
