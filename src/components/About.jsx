import React from 'react';
import { FaCalendarAlt, FaHandsHelping, FaHeartbeat, FaUserShield } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-page p-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-500 to-teal-400 text-white p-12 rounded-lg shadow-lg mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Caring for You, Anytime, Anywhere</h1>
        <p className="text-xl">
          Comprehensive healthcare services with seamless booking and 24/7 emergency support.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="about-section flex flex-col lg:flex-row bg-sky-600 text-white p-6 rounded-lg shadow-md mb-12">
        <div className="icon text-red-500 mb-6 lg:mb-0 lg:mr-8 text-center lg:text-left">
          <FaHeartbeat className="text-6xl mx-auto lg:mx-0" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className=" leading-relaxed">
            We are a dedicated healthcare provider focused on ensuring our patients receive the best care 
            and support. Our services include easy and efficient appointment scheduling as well as emergency 
            caretaker services for urgent situations.
          </p>
        </div>
      </section>

      {/* Booking and Scheduling Section */}
      <section className="booking-info-section bg-gradient-to-r from-sky-600 to-gray-300 p-8 rounded-lg shadow-md mb-12">
        <div className="text-center mb-8">
          <FaCalendarAlt className="text-blue-500 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Booking and Scheduling</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          Our platform allows patients to book appointments seamlessly. Using our intuitive booking calendar, 
          you can select your preferred date and time for a consultation. This ensures that both patients 
          and healthcare providers stay organized and well-prepared.
        </p>

        {/* Timeline for Booking Steps */}
        <div className="timeline flex justify-center space-x-6">
          <div className="timeline-step">
            <div className="step-icon bg-blue-500 text-white p-4 rounded-full mb-4">
              <FaUserShield className="text-2xl" />
            </div>
            <p>Sign Up/Log In</p>
          </div>
          <div className="timeline-step">
            <div className="step-icon bg-blue-500 text-white p-4 rounded-full mb-4">
              <FaCalendarAlt className="text-2xl" />
            </div>
            <p>Pick a Date</p>
          </div>
          <div className="timeline-step">
            <div className="step-icon bg-blue-500 text-white p-4 rounded-full mb-4">
              <FaHandsHelping className="text-2xl" />
            </div>
            <p>Get Connected</p>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="emergency-services-section bg-sky-600 p-6 rounded-lg shadow-md mb-12 flex flex-col lg:flex-row">
        <div className="icon text-red-500 mb-6 lg:mb-0 lg:mr-8 text-center lg:text-left">
          <FaHandsHelping className="text-6xl mx-auto lg:mx-0" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Emergency Services</h2>
          <p className=" leading-relaxed">
            In case of urgent care needs, we offer 24/7 emergency contact options. Our team of dedicated caretakers 
            is available to assist you in critical situations, ensuring you receive the support you need when it matters most.
          </p>
        </div>
      </section>

      {/* Commitment Section with Animation */}
      <section className="commitment-section bg-gradient-to-r from-teal-400 to-blue-500 text-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Commitment</h2>
        <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
          We are committed to providing high-quality healthcare services that prioritize your well-being. Our streamlined 
          booking system and 24/7 emergency services ensure peace of mind and immediate access to care.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
