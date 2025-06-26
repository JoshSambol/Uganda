import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
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
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}
export default App
