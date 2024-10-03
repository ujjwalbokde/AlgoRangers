import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About Our Healthcare Services</h1>
      
      <section className="about-section bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700">
          We are a dedicated healthcare provider focused on ensuring our patients receive the best care 
          and support. Our services include easy and efficient appointment scheduling as well as 
          emergency caretaker services for urgent situations.
        </p>
      </section>

      <section className="booking-info-section bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Booking and Scheduling</h2>
        <p className="text-gray-700">
          Our platform allows patients to book appointments seamlessly. Using our booking calendar, 
          you can select your preferred date and time for a consultation. This ensures that both 
          patients and healthcare providers stay organized and well-prepared.
        </p>
      </section>

      <section className="emergency-services-section bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Emergency Services</h2>
        <p className="text-gray-700">
          In case of urgent care needs, we offer 24/7 emergency contact options. Our team of dedicated 
          caretakers is available to assist you in critical situations, ensuring you receive the support 
          you need when it matters most.
        </p>
      </section>

      <section className="commitment-section bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-gray-700">
          We are committed to providing high-quality healthcare services that prioritize the well-being 
          of our patients. Our streamlined booking system and emergency services are designed to provide 
          peace of mind and immediate access to care.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;