import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import speakersImage from "../img/Speakers.jpg";

const Modal = ({ children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
        <button
          onClick={onClose}
          className="float-right text-gray-600 hover:text-gray-800"
        >
          <i className="fas fa-times"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

const ModalContent = ({ title, content, link, type }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      {type === "youtube" ? (
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${link.split("v=")[1]}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title={`YouTube video: ${title}`}
          ></iframe>
        </div>
      ) : type === "audio" ? (
        <audio controls className="w-full">
          <source src={link} type="audio/mpeg" />
          <source src={link.replace(".mp3", ".ogg")} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Open Resource
        </a>
      )}
    </div>
  );
};

const Speakers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const openModal = (title, content, link, type = "audio") => {
    setModalContent({ title, content, link, type });
    setIsModalOpen(true);
  };

  return (
    <section id="Speakers" className="container mx-auto px-4 py-16">
      <h2
        className="mt-10 text-4xl font-bold text-center mb-12"
        data-aos="fade-down"
      >
        <strong>Speakers</strong>
      </h2>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full md:w-1/2 px-4" data-aos="fade-right">
          <div className="space-y-6">
            <div
              className="card p-4 text-center shadow-lg rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
              data-aos="zoom-in"
              data-aos-delay="100"
              onClick={() =>
                openModal(
                  "11th Step Speaker Series",
                  "Listen to our 11th Step Speaker Series for insights and inspiration.",
                  `${process.env.PUBLIC_URL}/Files/11thStep.m4a`,
                  "audio"
                )
              }
            >
              <i className="fas fa-file-audio text-blue-600 text-2xl mb-2"></i>
              <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                11th Step Speaker Series
              </h3>
              <p className="text-sm text-gray-600 mt-2">Click to listen</p>
            </div>

            <div
              className="card p-4 text-center shadow-lg rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
              data-aos="zoom-in"
              data-aos-delay="200"
              onClick={() =>
                openModal(
                  "Allen Berger | Herb Kaighan Audio",
                  "Listen to Allen Berger and Herb Kaighan discuss Emotional Sobriety.",
                  `${process.env.PUBLIC_URL}/Files/Emotional Sobriety.mp3`,
                  "audio"
                )
              }
            >
              <i className="fas fa-file-audio text-blue-600 text-2xl mb-2"></i>
              <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                Allen Berger | Herb Kaighan Audio
              </h3>
              <p className="text-sm text-gray-600 mt-2">Click to listen</p>
            </div>

            <div
              className="card p-4 text-center shadow-lg rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
              data-aos="zoom-in"
              data-aos-delay="300"
              onClick={() =>
                openModal(
                  "Allen Berger | Emotional Sobriety",
                  "Watch Allen Berger discuss Emotional Sobriety on YouTube.",
                  "https://www.youtube.com/watch?v=xUHC90PM6mw",
                  "youtube"
                )
              }
            >
              <i className="fab fa-youtube text-blue-600 text-2xl mb-2"></i>
              <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                Allen Berger | Emotional Sobriety | Youtube
              </h3>
              <p className="text-sm text-gray-600 mt-2">Click to watch</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8" data-aos="fade-left">
          <div className="images mt-8 md:mt-0">
            <div className="relative overflow-hidden shadow-lg rounded-lg">
              <img
                src={speakersImage}
                alt="Speakers"
                className="w-full h-auto"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              <div className="absolute inset-0 bg-white bg-opacity-15 transition-opacity duration-300 hover:opacity-0"></div>
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
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalContent {...modalContent} />
        </Modal>
      )}
    </section>
  );
};

export default Speakers;
