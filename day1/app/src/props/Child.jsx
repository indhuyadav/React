// import React from "react";
// class Child extends React.Component{
//     render()
//     {
//         return(
//             <>
//               <h1>my name is {this.props.name} </h1>
//             </>
//         )
//     }
// }
// export default Child;



const Child = (props) => {
    console.log(props.obj);
    // let {name, id, designation}=props.obj
    // console.log(name);
    // console.log(id);
    // console.log(designation);
    
    
    
  return (
    <div>
      {/* <h1>my name is {props.name}</h1> */}
      {/* <h1>my age is {props.age}</h1> */}
      {/* <h1>{props.arr}</h1> */}
      {/* <h1>{name}</h1>
      <h1>{id}</h1>
      <h1>{designation}</h1> */}
      <button onClick={()=> props.fun1()}>click</button>
    </div>

  )
}

export default Child
