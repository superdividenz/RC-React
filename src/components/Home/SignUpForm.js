import React from "react";

const SignUpForm = () => {
  return (
    <div className="mt-6 border-t pt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up for the Event</h2>
      <form
        action="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse"
        method="POST"
        target="_blank"
        className="space-y-4"
      >
        <input
          name="entry.1234567890" // Replace with real field ID
          required
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          name="entry.0987654321" // Replace with real field ID
          required
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          name="entry.1122334455" // Replace with real field ID
          required
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-full"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 text-center">
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=TGRZESH5PQKVQ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
        >
          Donate with PayPal
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
