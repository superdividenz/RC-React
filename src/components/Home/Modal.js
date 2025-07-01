import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
