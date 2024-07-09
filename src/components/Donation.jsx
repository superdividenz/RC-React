import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gratitudeRoomImage from "../img/gratitude-room.jpg";
import { Tooltip } from "react-tooltip";

const Donations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="Donation" className="container mx-auto px-4 py-16">
      <h2
        className="mt-10 text-4xl font-bold text-center mb-12"
        data-aos="fade-down"
      >
        <strong>DONATIONS</strong>
      </h2>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full md:w-1/2 px-4 mb-8" data-aos="fade-right">
          <div className="relative overflow-hidden shadow-lg rounded-lg">
            <img
              src={gratitudeRoomImage}
              alt="Gratitude Room"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-white bg-opacity-15 transition-opacity duration-300 hover:opacity-0"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8" data-aos="fade-left">
          <div className="mt-8 md:mt-0">
            <i
              className="fas fa-hand-holding-usd text-3xl text-blue-500 mb-4"
              data-aos="zoom-in"
            ></i>
            <h3 className="text-2xl font-bold mb-4" data-aos="fade-up">
              Donation Opportunities
            </h3>
            <ul className="list-disc list-inside mb-8">
              <li data-aos="fade-up" data-aos-delay="100">
                Lake of Dreams (Picnic / Retreats)
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                Treatment and Recovery Supportive Housing Scholarships
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                Recovery Community Centers
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                Education
              </li>
              <li data-aos="fade-up" data-aos-delay="500">
                Wellness Opportunities
              </li>
              <li data-aos="fade-up" data-aos-delay="600">
                Recovery Events (Beyond Weekly Mtgs)
              </li>
            </ul>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=34GBKRVV85V68"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 mr-4"
              >
                Paypal Donate
                <i className="fas fa-graduation-cap ml-2"></i>
              </a>
              <button
                type="button"
                className="inline-block px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
                data-tooltip-id="donate-info"
              >
                Donate Info
              </button>
              <Tooltip
                id="donate-info"
                place="top"
                content={
                  <>
                    Recovery Capital STL.
                    <br />
                    140 Weldon Parkway Suite A<br />
                    Maryland Heights, MO 63043.
                    <br />
                    PH. 314-941-6415
                  </>
                }
                style={{
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr
        className="mt-20 border-t-2 border-gray-300 w-3/4 mx-auto"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
    </section>
  );
};

export default Donations;
