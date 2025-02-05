import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  
import State1 from './state/State1'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/Demo.jsx'
// import Parent from './props/Parent.jsx'
// import State from './state/State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/>
    <Demo/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    <State1/>
  </StrictMode>,
)
