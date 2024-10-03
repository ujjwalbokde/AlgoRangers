
import './App.css'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import HomePage from './components/Home'
import Navbar from './components/Navbar'
import NotificationsPage from './components/Notification'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
