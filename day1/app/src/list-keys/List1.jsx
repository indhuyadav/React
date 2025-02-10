// import React from 'react'

import { Fragment } from "react";

const List1 = (props) => {
    console.log(props);
    console.log(props.main);
    
  return (
    <Fragment>
        {
            props.main.map(x=>{
                console.log();
                
                return(
                    <Fragment key={x.id}>
                        <li>{x.name}</li>
                    </Fragment>
                )
            })
        }
    </Fragment>
  )
}

export default List1
