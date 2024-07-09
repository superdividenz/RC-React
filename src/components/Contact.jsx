import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import theHubImage from "../img/TheHub.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message_body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://getform.io/f/8f5583a7-bd74-42f2-aaf2-2b6e49fd6b6a",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", message_body: "" });
        setSubmitMessage("Message sent successfully!");
      } else {
        setSubmitMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="container mx-auto px-4 py-16">
      <h2
        className="mt-10 text-4xl font-bold text-center mb-12"
        data-aos="fade-in"
      >
        <strong>CONTACT</strong>
      </h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-2/3 px-4 mb-8">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-5" data-aos="zoom-in" data-aos-duration="500">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div
              className="mb-5"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <textarea
                required
                name="message_body"
                value={formData.message_body}
                onChange={handleChange}
                rows="6"
                placeholder="Message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            {submitMessage && (
              <div className="mb-4 text-center text-green-600">
                {submitMessage}
              </div>
            )}
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8" data-aos="zoom-in">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={theHubImage}
              alt="The Hub"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Recovery Capital STL.</h3>
              <p className="text-gray-700 mb-4">
                140 Weldon Parkway Suite A<br />
                Maryland Heights, MO 63043
                <br />
                PH: 314-941-6415
              </p>
              <a
                href="https://goo.gl/maps/91bjwpBStbQPK3Zg6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                MAP
              </a>
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

export default Contact;
