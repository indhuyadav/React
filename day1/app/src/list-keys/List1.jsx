// import React from 'react'

import { Fragment } from "react";

const List1 = (props) => {
    console.log(props);
    console.log(props.main);
    
  return (
    <Fragment>
        {
            props.main.map((x)=>{
                return(
                    <>
                    <ol>
                        <li key={x.id}> {x.name} </li>
                    </ol>
                    </>
                )
            })
        }
    </Fragment>
  )
}

export default List1
