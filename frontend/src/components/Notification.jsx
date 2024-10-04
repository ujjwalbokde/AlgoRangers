import React, { useEffect, useState } from 'react';

const NotificationsPage = () => {
  const [appointmentTime, setAppointmentTime] = useState(null); // Store appointment time
  const [timeRemaining, setTimeRemaining] = useState(null); // Store remaining time in milliseconds
  const [reminders, setReminders] = useState([]); // Store the list of triggered reminders

  // Example function to simulate booking an appointment
  const bookAppointment = (time) => {
    setAppointmentTime(new Date(time)); // Set the appointment time
    setReminders([]); // Reset reminders
  };

  // Calculate the time remaining until the appointment and set reminders
  useEffect(() => {
    if (appointmentTime) {
      const updateTimeRemaining = () => {
        const now = new Date();
        const timeDifference = appointmentTime - now;
        setTimeRemaining(timeDifference);

        // Calculate times for reminders
        const oneHour = 60 * 60 * 1000;
        const thirtyMinutes = 30 * 60 * 1000;
        const fifteenMinutes = 15 * 60 * 1000;

        // Check for upcoming reminders and add to reminders list
        if (timeDifference <= oneHour && timeDifference > thirtyMinutes && !reminders.includes('Reminder: 1 hour left')) {
          setReminders((prev) => [...prev, 'Reminder: 1 hour left']);
        } else if (timeDifference <= thirtyMinutes && timeDifference > fifteenMinutes && !reminders.includes('Reminder: 30 minutes left')) {
          setReminders((prev) => [...prev, 'Reminder: 30 minutes left']);
        } else if (timeDifference <= fifteenMinutes && timeDifference > 0 && !reminders.includes('Reminder: 15 minutes left')) {
          setReminders((prev) => [...prev, 'Reminder: 15 minutes left']);
        } else if (timeDifference <= 0 && !reminders.includes('Appointment time')) {
          setReminders((prev) => [...prev, 'Your appointment is now']);
        }
      };

      // Update the time every second
      const interval = setInterval(updateTimeRemaining, 1000);

      // Cleanup the interval when component unmounts
      return () => clearInterval(interval);
    }
  }, [appointmentTime, reminders]);

  return (
    <div className="notifications-page p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Appointment Notifications and Alerts</h1>

      {/* Form to book an appointment */}
      <section className="booking-section mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
        <input
          type="datetime-local"
          onChange={(e) => bookAppointment(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
        />
      </section>

      {/* Displaying the reminders */}
      <section className="reminders-section mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Reminders</h2>
        {reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <p key={index} className="text-gray-700">{reminder}</p>
          ))
        ) : (
          <p className="text-gray-500">No upcoming reminders yet.</p>
        )}
      </section>

      {/* Time remaining until appointment */}
      <section className="time-remaining-section bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Time Remaining</h2>
        {appointmentTime && timeRemaining !== null ? (
          <p className="text-gray-700">{Math.max(timeRemaining / 1000, 0).toFixed(0)} seconds remaining</p>
        ) : (
          <p className="text-gray-500">No appointment scheduled.</p>
        )}
      </section>
    </div>
  );
};

export default NotificationsPage;