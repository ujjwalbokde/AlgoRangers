import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const AppointmentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
const Navigate=useNavigate();
    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem('token'); // Retrieve token here
            
            const response = await fetch('http://localhost:5000/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Include the token
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create appointment');
            }
    
            const result = await response.json();
            console.log(result.message);
            Navigate("/thanks");
            // Optionally, reset the form or show a success message here
        } catch (error) {
            console.error('Error:', error);
            // Handle error here (e.g., display a message to the user)
        }
    };
    

    return (
        <div className="max-w-md mx-auto p-6  rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Appointment Form</h2>
            <p className="mb-4">Please fill out the essential information for scheduling.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <label className="block">
                    <span className="text-gray-100">Full Name:</span>
                    <input
                        type="text"
                        {...register('fullName', { required: true })}
                        className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">This field is required</p>}
                </label>

                <label className="block">
                    <span className="text-gray-100">Email:</span>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">This field is required</p>}
                </label>

                <label className="block">
                    <span className="text-gray-100">Phone Number:</span>
                    <input
                        type="tel"
                        {...register('phone', { required: true })}
                        className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">This field is required</p>}
                </label>

                <label className="block">
                    <span className="text-gray-100">Preferred Appointment Date:</span>
                    <input
                        type="date"
                        {...register('appointmentDate', { required: true })}
                        className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${errors.appointmentDate ? 'border-red-500' : ''}`}
                    />
                    {errors.appointmentDate && <p className="text-red-500 text-sm">This field is required</p>}
                </label>

                <label className="block">
                    <span className="text-gray-100">Preferred Appointment Time:</span>
                    <input
                        type="time"
                        {...register('appointmentTime', { required: true })}
                        className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${errors.appointmentTime ? 'border-red-500' : ''}`}
                    />
                    {errors.appointmentTime && <p className="text-red-500 text-sm">This field is required</p>}
                </label>

                <label className="block">
                    <span className="text-gray-100">Health Issue:</span>
                    <textarea
                        {...register('healthIssue', { required: true })}
                        placeholder="Briefly describe your health issue"
                        className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${errors.healthIssue ? 'border-red-500' : ''}`}
                    />
                    {errors.healthIssue && <p className="text-red-500 text-sm">This field is required</p>}
                </label>

                <button type="submit" className="w-full mt-4 bg-blue-800 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;
