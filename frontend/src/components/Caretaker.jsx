import React from "react";
import { Link } from "react-router-dom";

const Caretaker = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-gray-800">
      <div className="p-6 px-10 rounded shadow-2xl w-1/2 bg-sky-100">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome, Caretaker</h1>
        <img 
          src="./icon.png" 
          alt="Caretaker" 
          className="w-full h-48 object-fill rounded mb-4" 
        />
        <p className="mb-4 text-center">
          This is the main page for caretakers. Here you can manage your responsibilities and ensure the well-being of those under your care.
        </p>
        
        <h2 className="text-xl font-semibold mb-3">Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>✔️ Verify Caretakers</li>
          <li>✔️ Access patient records</li>
          <li>✔️ Schedule appointments</li>
          <li>✔️ Communicate with family members</li>
        </ul>

        {/* Option to Verify Caretaker */}
        <Link to="/verify-caretaker">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Verify Caretaker
          </button>
        </Link>
        
        <div className="mt-6">
          <p className="text-sm text-gray-500 text-center">
            For more assistance, please contact support.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Caretaker;
