import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login"); // Redirect to login if not authenticated
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (response.ok) {
          setUser(data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error fetching profile data.");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) return <p>{error}</p>;

  return (
    <div className="flex items-center justify-center h-screen">
      {user ? (
        <div className="p-6 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
          {/* Render based on user type */}
          {user.role === "patient" ? (
            <>
              <h2 className="text-xl mb-2">Patient Information</h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Account created on:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
              {/* Add more patient-specific information here */}
            </>
          ) : user.role === "caretaker" ? (
            <>
              <h2 className="text-xl mb-2">Caregiver Information</h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Account created on:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
              {/* Add more caregiver-specific information here */}
            </>
          ) : (
            <p>Unknown user type</p>
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
