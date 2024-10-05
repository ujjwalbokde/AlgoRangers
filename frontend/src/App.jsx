
import './App.css'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import HomePage from './components/Home'
import Navbar from './components/Navbar'
import NotificationsPage from './components/Notification'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import AppointmentForm from './components/AppointmentForm'
import GetStarted from './components/Getstarted'
import ThankYou from './components/Thanku'
import Caretaker from './components/Caretaker'
import VerifyCaretaker from './components/Verify'
import YourAppointment from './components/YourAppointment'
function App() {

  return (
    <>
     <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/start" element={<GetStarted/>} />
          <Route path="/appointment" element={<AppointmentForm/>} />
          <Route path="/thanks" element={<ThankYou/>} />
          <Route path="/caretaker" element={<Caretaker/>} />
          <Route path="/verify-caretaker" element={<VerifyCaretaker/>} />
          <Route path="/yourAppointments" element={<YourAppointment/>} />

        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
