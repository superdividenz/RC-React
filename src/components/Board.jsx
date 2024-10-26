import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import freedomRoomImage from "../img/freedom-room.jpg";

const Board = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <section id="Board" className="container mx-auto px-4 py-16">
      <h2
        className="mt-10 text-4xl font-bold text-center mb-12"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <strong>BOARD</strong>
      </h2>
      <div className="flex flex-wrap -mx-4">
        <div
          className="w-full md:w-1/2 px-4 mb-8"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold mb-4">Paul D. Melnuk, Chairman</h3>
          <ul className="list-disc list-inside mb-8">
            <li data-aos="fade-up" data-aos-delay="300">
              Fred J. "Freddy" Mickel, President
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              Albert "Al" Jones
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              Shawn Intagliata
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              Brian McGinnis
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              JM LeCointre
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              Fran Caradonna
            </li>
          </ul>
          <hr className="my-8" data-aos="fade-in" data-aos-delay="1100" />
          <h3
            className="text-2xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            BOARD OFFICERS:
          </h3>
          <ul className="list-disc list-inside">
            <li data-aos="fade-up" data-aos-delay="1300">
              Paul D. Melnuk, Chairman
            </li>
            <li data-aos="fade-up" data-aos-delay="1400">
              Fred J. "Freddy" Mickel, President
            </li>
            <li data-aos="fade-up" data-aos-delay="1500">
              Albert "Al" Jones, Treasurer
            </li>
            <li data-aos="fade-up" data-aos-delay="1600">
              JM LeCointre, Secretary
            </li>
          </ul>
        </div>
        <div
          className="w-full md:w-1/2 px-4 mb-8 flex justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="images">
            <div className="relative overflow-hidden shadow-lg rounded-lg mt-8">
              <img
                src={freedomRoomImage}
                alt="Freedom Room"
                className="max-w-full h-auto object-cover object-center"
                data-aos="zoom-in"
                data-aos-delay="300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-15 transition-opacity duration-300 hover:opacity-0"></div>
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

export default Board;
