// import React, { useState } from 'react'

// const State = () => {
//     let [state, setState]= useState("batch6")
//     console.log(state);
//     console.log(setState);

//     let demo=()=>{
//         setState("batch7")
//     }
    
    
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={demo}>click</button>
//     </div>
//   )
// }

// export default State

// import React, { useState } from 'react'

// const State = () => {
//   let[state,setState]=useState(0)
//   let increment=()=>{
//     setState(state+1)
//   }
//   let decrement = ()=>{
//     setState(state-1)
//   }
//   let reset=()=>{
//     setState(0)
//   }
//   return (
//     <div>
//       <h1>[state}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default State


import React, { useState } from 'react'

const State = () => {
  let[name,setName]=useState()
  let[password,setPassword]=useState()
  let demo=(e)=>{
    e.preventDefault()
    console.log({name,password});
    
    name === "indhu" && password === "yadav@163" ? window.open("http://www.pixabay.com") : window.location.reload()
  }

  return (
    <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name}
        onChange={(e)=>{setName(e.target.value)}}/>
        <br/>

        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
        <br/>
        <button onClick={demo}>submit</button>

      </form>
    </div>
  )
}

export default State

