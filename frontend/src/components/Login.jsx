import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Save the token
      const token = data.token;
      localStorage.setItem("token", token);
      console.log("Token:", token);
      console.log("Login successful");

      // Use the role directly from the response
      const userRole = data.role; // Now we can get the role from the response
      console.log("User Role:", userRole); // Log user role

      // Check the user role and redirect accordingly
      if (userRole === "patient") {
        window.location.href="/start"; // Redirect to /start for patients
      } else if (userRole === "caretaker") {
        window.location.href="/caretaker"; // Redirect to /caretaker for caretakers
      } else {
        console.error("Unknown user role");
        setError("Unknown user role");
      }
    } else {
      console.error(data.message);
      setError(data.message); // Set the error message to state
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="p-6 px-44 rounded shadow-2xl w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Display error message */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
