import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cbc from './component/Cbc'
import Parent from './props/Parent'
import Parent1 from './props/Parent1'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc/>
    <Parent/>
    <Parent1/>
  </StrictMode>,
)
