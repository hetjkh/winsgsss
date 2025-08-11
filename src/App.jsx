import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ContactUsPage from './pages/ContactPage/Contactpage'
import Home from './pages/HomePage/Home'

function App() {
  return (
    <Routes>
       
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/" element={<Home/>} />
      
    </Routes>
  )
}

export default App