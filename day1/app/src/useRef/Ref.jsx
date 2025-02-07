// import React from 'react'

import { useRef } from "react";

// import { useRef } from "react"

// const Ref = () => {
//     let demo =useRef()
//     console.log(demo);
//     console.log(demo.current);
//     demo.current.style.backgroundColor="red"

//   return (
//     <div>
//       <h1 ref={demo}>hello-world</h1>
//     </div>
//   )
// }

// export default Ref


//Example-2
// import React from 'react'

// const Ref = () => {
//     let demo1=useRef()
//     console.log(demo1);
    
//     let eventHandler=()=>{
//         demo1.current.style.backgroundColor="green"
//     }
//   return (
//     <div>
//       <h2 ref={demo1}>Hello</h2>
//       <button onClick={eventHandler}>click</button>
//     </div>
//   )
// }

// export default Ref


//example-3 uncontrolled form

// import React from 'react'

const Ref = () => {
    let name=useRef('')
    let password=useRef('')

    let demo=(e)=>{
        e.preventDefault()
        console.log({name: name.current.value});
        
        name === "indhu" && password === "yadav@163" ? window.open("http://www.pixabay.com") : window.location.reload()
  


    }
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br/>
        <label htmlFor="password"><Password></Password></label>
        <input type="text" name="password" id="password" />
        <br/>
        <button onClick={demo}>Submit</button>
        <br/>

        
       

      </form>
    </div>
  )
}

export default Ref

