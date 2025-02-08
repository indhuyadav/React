// import React from 'react'

import { Fragment } from "react";

const List = () => {
    let arr=[10,20,30,40]
    console.log(arr);
    let num=0;
    console.log(num);
    
    
  return (
    <Fragment>
        {
            arr.map((x)=>{
                console.log(x);
                console.log(`<li key=${num++}>${x}</li>`);
                
                return(
                   <li key={num++}>{x}</li>
                )
            })
        }
    </Fragment>
  )
}

export default List
