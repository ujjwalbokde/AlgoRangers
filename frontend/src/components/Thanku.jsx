// src/components/ThankYou.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ThankYou = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="flex items-center justify-center h-screen  text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                <p className="mb-4">Your appointment has been booked successfully.</p>
                <p>A confirmation email has been sent to your email address.</p>
                <button
                    onClick={() => navigate('/')} // Redirect to the home page or another page
                    className="mt-6 bg-blue-800 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default ThankYou;
