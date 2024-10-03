// pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero  text-white text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Connecting Patients with Trusted Caretakers</h2>
        <p className="text-xl mb-8">Find qualified caretakers based on your needs.</p>
        <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          Start Searching
        </button>
      </section>


      {/* How It Works */}
      <section className="how-it-works  py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">How It Works</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-sky-700 p-8 shadow-lg rounded">
            <h4 className="text-xl font-semibold mb-4">1. Search</h4>
            <p>Find caretakers in your area.</p>
          </div>
          <div className="bg-sky-700 p-8 shadow-lg rounded">
            <h4 className="text-xl font-semibold mb-4">2. Book</h4>
            <p>Schedule an appointment at your convenience.</p>
          </div>
          <div className="bg-sky-700 p-8 shadow-lg rounded">
            <h4 className="text-xl font-semibold mb-4">3. Connect</h4>
            <p>Receive personalized care from qualified professionals.</p>
          </div>
        </div>
      </section>

      {/* Featured Caretakers */}
      <section className="featured-caretakers py-16">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Caretakers</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="caretaker-card bg-sky-700 p-4 shadow-lg rounded text-center">
            <img src="/caretaker1.jpg" alt="Caretaker 1" className="w-full h-48 object-cover mb-4 rounded" />
            <h4 className="text-xl font-bold mb-2">John Doe</h4>
            <p className="text-sm">Specialization: Physical Therapy</p>
            <p className="text-yellow-500">★★★★☆</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
          <div className="caretaker-card bg-sky-700 p-4 shadow-lg rounded text-center">
            <img src="/caretaker2.jpg" alt="Caretaker 2" className="w-full h-48 object-cover mb-4 rounded" />
            <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
            <p className="text-sm">Specialization: Nursing</p>
            <p className="text-yellow-500">★★★★★</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
          {/* Add more caretaker cards */}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">Patient Testimonials</h3>
        <p className="text-xl mb-4">"The service was exceptional!" - Patient A</p>
        {/* Add more testimonials */}
      </section>

      {/* Benefits */}
      <section className="benefits  py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">Benefits of Our Service</h3>
        <ul className="list-none space-y-4">
          <li>✔ Verified Caretakers</li>
          <li>✔ Secure Payments</li>
          <li>✔ 24/7 Support</li>
          <li>✔ Health Tracking Tools</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className=" text-white text-center py-16">
        <h3 className="text-3xl font-bold mb-8">Ready to Find Your Caretaker?</h3>
        <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      
    </div>
  );
};

export default HomePage;
