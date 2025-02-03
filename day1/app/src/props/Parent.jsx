/* eslint-disable react/jsx-no-undef */
// import React from "react";
// import Child from "./Child";


// class Parent extends React.Component {
//     state={
//         username: "Indu"
//     }
//     render()
//     {
//         return(
//             <Child  name={this.state.username} />
//         )
//     }
// }
// export default Parent


import Child from "./Child";
const Parent = () => {
    // let obj1={
    //     name:"indu",
    //     id:2211010665,
    //     designation:"student"
    // }
    let fun = () =>{
        window.alert("I am a function")
} 
 return (
    <div>
      {/* <Child  name="Indhu" /> */}
      {/* <Child age= {20} /> */}
      {/* <Child arr={[10,20,30]}/> */}
      {/* <Child obj={obj1}/> */}
      <Child fun1={fun}/>
    </div>
  )
}

export default Parent
