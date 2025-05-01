import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// The code execution starts from this main.jsx file.
// It imports the necessary modules and the main App component,
// then renders the App within a StrictMode wrapper.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
