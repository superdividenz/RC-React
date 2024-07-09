import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50, // offset (in px) from the original trigger point
      easing: "ease-in-out-sine", // default easing for AOS animations
    });
  }, []);

  return (
    <footer className="bg-gray-800 text-white pb-5">
      <div
        className="mt-8 pt-8 border-t border-gray-700 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
      >
        <p>&copy; {currentYear} Recovery Capital, INC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
