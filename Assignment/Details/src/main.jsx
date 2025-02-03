import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cbc from './component/Cbc'
import Parent from './props/Parent'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc/>
    <Parent/>
  </StrictMode>,
)
