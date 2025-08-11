import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ContactUsPage from './pages/ContactPage/Contactpage'


function App() {
  return (
    <Routes>
       
        <Route path="/contact" element={<ContactUsPage />} />
      
    </Routes>
  )
}

export default App