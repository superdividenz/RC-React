import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/App.css";
import backgroundImage from "../img/business-05.jpg";

import Modal from "./Home/Modal";
import FlyerModalContent from "./Home/FlyerModalContent";
import SignUpForm from "./Home/SignUpForm";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const openFlyer = () => {
    setShowSignUp(false);
    setIsModalOpen(true);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        id="Home"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="min-h-screen bg-black bg-opacity-40 flex flex-col justify-center items-center">
          {/* Hero Section */}
          <div className="container mx-auto py-10 text-center">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              data-aos="fade-up"
            >
              Recovery Capital STL Inc.
            </h1>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              501(c)(3) Organization
            </h2>
          </div>

          {/* Content Boxes */}
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div
              className="p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h3
                className="text-2xl font-semibold text-white mb-8"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Join Us at the 11th Step & Spirituality Panel
              </h3>

              <p
                className="text-gray-300 leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                This inspiring event brings together members of the recovery
                community in St. Louis to explore the spiritual foundations of
                healing and support. Engage in heartfelt discussions, share your
                journey, and connect with others on the path to recovery.
              </p>

              <p
                className="text-gray-300 leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Whether you’re new to recovery or looking to deepen your
                understanding, this panel offers valuable insights and
                encouragement in a welcoming space.
              </p>

              <div
                className="flex justify-center space-x-4"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <button
                  onClick={openSignUp}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md"
                  data-aos="zoom-in"
                  aria-label="Sign Up for the Event"
                >
                  Sign Up
                </button>

                <button
                  onClick={openFlyer}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
                  data-aos="zoom-in"
                  aria-label="View Event Flyer"
                >
                  View Flyer
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="p-6 rounded-lg"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <ul className="text-white text-lg space-y-2 mb-6">
                {[
                  "Recovery Community Centers",
                  "Treatment and Sober Recovery Housing Scholarships",
                  "Events (including annual Lake of Dreams Picnic)",
                  "Education",
                  "Wellness Opportunities",
                ].map((item, index) => (
                  <li
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={200 + index * 100}
                    className="list-disc list-inside"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p
                className="text-white mb-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Through individual and group fundraising, we improve the lives of
                individuals and families affected by addiction and mental health
                disorders, and the greater community.
              </p>

              <a
                href="https://www.paypal.com/donate/?hosted_button_id=TGRZESH5PQKVQ"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
                data-aos="zoom-in"
                data-aos-delay="900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate via PayPal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Flyer or SignUpForm */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {showSignUp ? <SignUpForm /> : <FlyerModalContent />}
      </Modal>
    </>
  );
};

export default Home;
