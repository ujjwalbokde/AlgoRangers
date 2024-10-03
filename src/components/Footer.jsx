import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
    <ul className="flex justify-center space-x-8 mb-4">
      <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
      <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
      <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
    </ul>
    <p>Contact: <a href="mailto:support@careconnect.com" className="text-blue-400">support@careconnect.com</a></p>
  </footer>
  )
}

export default Footer