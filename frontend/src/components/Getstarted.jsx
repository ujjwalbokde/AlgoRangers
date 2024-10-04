import React from "react";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Appointment Booking Page */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-100">
          Welcome to Our Appointment Booking Page!
        </h2>
        <p className="text-lg text-gray-400 mt-2 mb-8">
          We're here to make your booking experience smooth and pleasant.<br></br> Let's get started with scheduling your appointment!
        </p>

        {/* Image Adjustment */}
        <div className="flex justify-center mb-8">
          <img
            src="/appointment.jpg"
            alt="Booking Illustration"
            className="max-w-full h-80 w-72 md:w-96 lg:w-1/2" // Adjust width here
          />
        </div>

        <Link
          to="/appointment"
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Book My Appointment
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
