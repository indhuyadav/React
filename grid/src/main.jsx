import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Comp1 from './Comp1'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Comp1/>
  </StrictMode>,
)
