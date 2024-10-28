import React from 'react'
import ReactDom from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
   <App />
   </Router>
  </React.StrictMode>,
)
