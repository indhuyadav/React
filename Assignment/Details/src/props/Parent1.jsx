import React, { Component } from 'react';
import Child1 from './Child1';

class Parent1 extends Component {

    
  render() {
    // let obj1={
    //     name:"indhu",
    //     age:20,
    //     city:"mlg"

    // }
    // let fun1=()=>{
    //     window.alert("After clicking the button");
    // }
   
    
    return (
      <div>
        <Child1 name="pavan"/> 
        {/* <Child1 age ={20}/>
        <Child1 arr={[10,20,30]}/> */}
         {/* <Child1 obj={obj1}/> */}
        {/* <Child1 fun={fun1}/> */}
      </div>
    )
  }
}


export default Parent1