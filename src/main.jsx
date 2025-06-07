// This is your entry point.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// This is React 18+ style of rendering the app (called concurrent mode).
// Replaces old ReactDOM.render(...).
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // <StrictMode><App /></StrictMode>
// Renders your App component inside StrictMode to help find bugs during development.
)
