import React from "react";

const FlyerModalContent = () => {
  return (
    <div className="mb-6 space-y-4">
      <h2 className="text-2xl font-bold text-center">Emotional Sobriety Workshop</h2>

      <div className="w-full h-64 md:h-80 overflow-hidden rounded border">
        <iframe
          src={`${process.env.PUBLIC_URL}/Flyers/Emotional_Sobriety_Workshop.pdf`}
          title="ACA/FA Flyer"
          className="w-full h-full"
        ></iframe>
      </div>

      <a
        href={`${process.env.PUBLIC_URL}/Flyers/ES-Workshop.pdf`}
        download="ES_Workshop_Flyer.pdf"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 block text-center"
      >
        Download Flyer
      </a>
    </div>
  );
};

export default FlyerModalContent;
