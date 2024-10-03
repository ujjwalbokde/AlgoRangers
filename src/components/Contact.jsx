import React, { useState } from 'react';

const ContactPage = () => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you can add logic to send the contact details to the backend or API.
    alert('Your message has been submitted. We will get back to you shortly.');
  };

  return (
    <div className="contact-page p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <section className="general-contact bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">General Inquiries</h2>
        <p className="mb-6 text-gray-600">
          If you have any questions about our services or need further information, 
          please reach out to us using the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              value={contactDetails.name}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, name: e.target.value })
              }
              required
              className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              value={contactDetails.email}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, email: e.target.value })
              }
              required
              className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Message:</span>
            <textarea
              value={contactDetails.message}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, message: e.target.value })
              }
              required
              className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600">Thank you for contacting us. We will respond to your inquiry as soon as possible.</p>
        )}
      </section>

      <section className="emergency-contact bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Emergency Contact</h2>
        <p className="text-gray-600 mb-6">
          If you require urgent care or assistance, please use the emergency contact below.
        </p>
        <div className="emergency-info text-gray-700">
          <p><strong>Emergency Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> emergency@healthcare.com</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;