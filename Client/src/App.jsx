import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Schools from './pages/Schools'
function App() {

  return (
    <>
      <Router>
        <div style={{ position: 'relative' }}>
          <Nav />
          <div style={{ marginTop: '60px' }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}
export default App
