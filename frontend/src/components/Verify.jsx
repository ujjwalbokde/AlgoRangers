import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const VerifyCaretaker = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    navigate('/yourAppointments')
//     e.preventDefault();
    
//     // Call the API to verify the caretaker
//     const response = await fetch("http://localhost:5000/api/caretakers/verify", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await response.json();
    
//     // Check if the verification was successful
//     if (response.ok) {
//       setMessage("Verification successful!");
//       // Navigate to appointments page
//       navigate("/appointments");
//     } else {
//       setMessage(`Error: ${data.message}`);
//     }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="p-6 px-10 rounded shadow-2xl w-1/3 bg-sky-200 text-black">
        <h1 className="text-2xl font-bold mb-6 text-center">Verify Care taker</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Enter Caretaker's Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full text-white"
              placeholder="Enter caretaker email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Verify
          </button>
        </form>

        {message && (
          <div className={`mt-4 text-center ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCaretaker;
