import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Reasons from './components/Reasons'
import Letter from "./components/Letter"

import { BrowserRouter as Router, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  </StrictMode>,
)
