
import './App.css'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import HomePage from './components/Home'
import Navbar from './components/Navbar'
import NotificationsPage from './components/Notification'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/register'
import Login from './components/Login'

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
          {/* <Route path="/service" element={<Servic/>} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
