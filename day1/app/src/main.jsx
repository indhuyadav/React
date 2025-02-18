import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'  
// import State1 from './state/State1'
// import Inline from './styles/Inline'
// import Comp1 from './styles/Comp1'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/Demo.jsx'
// import Parent from './props/Parent.jsx'
// import State from './state/State.jsx'
import "../src/styles/globally.css"
// import CompA from './useContext/CompA'
// import UseEffect from './useeffect/UseEffect'
import Child from './HOC/Child'
// import Comp3 from './list-keys/Comp3'
// import External from './styles/External'
// import Ref from './useRef/Ref'
// import List from './list-keys/List'
// import Comp2 from './styles/Comp2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/>
    <Demo/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    {/* <State1/> */}
    {/* <Inline/> */}
    {/* <Comp1/>
    <Comp2/> */}
    {/* <External/> */}
    {/* <Ref/> */}
    {/* <List/> */}
    {/* <Comp3/> */}
    {/* <CompA/> */}
    {/* <UseEffect/> */}
    <Child/>
  </StrictMode>,
)
