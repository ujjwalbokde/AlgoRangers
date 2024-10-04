// pages/HomePage.js
import { useState, useEffect } from "react";
import React from "react";
import AboutPage from "./About";
import ContactPage from "./Contact";
const benefitsData = [
  {
    text: "Verified Caretakers",
    description: "All caretakers go through a thorough verification process.",
    image: "/verified.png", // Replace with your image path
  },
  {
    text: "Secure Payments",
    description: "We ensure secure and transparent transactions.",
    image: "/secure.png", // Replace with your image path
  },
  {
    text: "24/7 Support",
    description: "Around-the-clock support to address your needs.",
    image: "/hour.png", // Replace with your image path
  },
];
const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change benefit every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefitsData.length);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const { text, description, image } = benefitsData[currentIndex];
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Remove '#' from hash
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero  text-white text-center py-16">
        <h2 className="text-4xl font-bold mb-4">
          Connecting Patients with Trusted Caretakers
        </h2>
        <p className="text-xl mb-8">
          Find qualified caretakers based on your needs.
        </p>
        <div className="flex items-center justify-center">
          <div className=" h-96 flex items-center justify-center my-10">
            <img
              src="/hero1.png"
              alt=""
              className="max-w-full max-h-full rounded-2xl"
            />
            <img
              src="/hero2.png"
              alt=""
              className="max-w-full max-h-full rounded-2xl"
            />
          </div>
        </div>

        <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          Get Started!
        </button>
      </section>

      {/* How It Works */}
      <section className="how-it-works py-16 text-center ">
        <h3 className="text-3xl font-bold mb-12">How It Works</h3>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center w-72 md:w-64">
            <div className="flex items-center justify-center  mb-4">
              <img src="/search.png" alt="Search Icon" className="w-16 h-16" />
            </div>
            <div className="bg-sky-700 p-8 shadow-lg rounded-lg w-full">
              <h4 className="text-xl font-semibold mb-4 text-white">
                1. Search
              </h4>
              <p className="text-white">Find caretakers in your area.</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center items-center">
            <img src="/arrow-right.png" alt="Arrow Icon" className="w-8 h-8" />
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center w-72 md:w-64">
            <div className="flex items-center justify-center mb-4">
              <img src="/book.png" alt="Book Icon" className="w-16 h-16" />
            </div>
            <div className="bg-sky-700 p-8 shadow-lg rounded-lg w-full">
              <h4 className="text-xl font-semibold mb-4 text-white">2. Book</h4>
              <p className="text-white">
                Schedule an appointment at your convenience.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center items-center">
            <img src="/arrow-right.png" alt="Arrow Icon" className="w-8 h-8" />
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center w-72 md:w-64">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/connect.png"
                alt="Connect Icon"
                className="w-16 h-16"
              />
            </div>
            <div className="bg-sky-700 p-[28px] shadow-lg rounded-lg w-full">
              <h4 className="text-xl font-semibold mb-4 text-white">
                3. Connect
              </h4>
              <p className="text-white">
                Receive personalized care from qualified professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits py-16 text-center ">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-gray-100">
            Benefits of Our Service
          </h3>
          <div className="relative overflow-hidden">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={image}
                alt={text}
                className="w-full h-96 object-fill rounded-lg shadow-lg mb-6 transition-all duration-1000 ease-in-out"
              />
            </div>
            {/* Text Content */}
            <div className="text-lg text-gray-700">
              <p className="font-semibold text-2xl">{text}</p>
              <p className="mt-2">{description}</p>
            </div>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {benefitsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                } transition-colors duration-300`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <div  id="about">
      <AboutPage />
      </div>
      <ContactPage id="contact" />
    </div>
  );
};

export default HomePage;
