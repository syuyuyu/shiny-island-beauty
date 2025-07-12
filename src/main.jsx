import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'; // ← 引入 SCSS + Tailwind
import './styles/common.scss'; // ← 引入 SCSS + Tailwind
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
