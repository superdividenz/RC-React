import React from "react";

const SignUpForm = () => {
  const handlePayPalClick = () => {
    window.open(
      "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=admin@recoverycapitalstl.org&item_name=11th+Step+Event&amount=40.00&currency_code=USD",
      "_blank",
      "noopener,noreferrer,width=600,height=700"
    );
  };

  return (
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSeMOeqSdj8ZOHsJ15Uft7PVP4mfKWSA9KIr8dr5EdZFMPZu_g/formResponse"
      method="POST"
      target="_blank"
      className="space-y-5 px-4 py-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3
        className="text-xl font-semibold text-center mb-4 text-gray-800"
        data-aos="fade-down"
      >
        Sign Up for the 11th Step / Spirituality Panel
      </h3>

      <input
        name="entry.467470827"
        type="text"
        required
        placeholder="Full Name"
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        data-aos="fade-up"
        data-aos-delay="300"
      />

      <input
        name="entry.247135147"
        type="email"
        required
        placeholder="Email Address"
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        data-aos="fade-up"
        data-aos-delay="400"
      />

      <input
        name="entry.17145704"
        type="tel"
        required
        placeholder="Phone Number"
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        data-aos="fade-up"
        data-aos-delay="500"
      />

      <select
        name="entry.23254515"
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <option value="">Select Payment Status</option>
        <option value="Paid">Paid (via PayPal)</option>
        <option value="Not Paid">Not Paid</option>
      </select>

      <button
        type="button"
        onClick={handlePayPalClick}
        className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="700"
      >
        Pay $40 with PayPal
      </button>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        Submit Registration
      </button>
    </form>
  );
};

export default SignUpForm;
