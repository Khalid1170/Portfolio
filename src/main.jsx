import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const loader = document.getElementById('initial-loader')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    if (loader) {
      loader.classList.add('hide')
      setTimeout(() => loader.remove(), 400)
    }
  })
})