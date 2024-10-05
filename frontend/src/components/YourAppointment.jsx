import React, { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/yourAppointments");
//         if (!response.ok) {
//           throw new Error("Failed to fetch appointments");
//         }
//         const data = await response.json();
//         setAppointments(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, []);

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 px-10 rounded shadow-2xl w-1/2 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Appointments</h1>
        
        {appointments.length > 0 ? (
          <ul className="space-y-4">
            {appointments.map((appointment) => (
              <li key={appointment.id} className="p-4 border-b">
                <h2 className="text-xl font-semibold">{appointment.title}</h2>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
                <p>Caregiver: {appointment.caretakerEmail}</p>
                <p>Status: {appointment.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
