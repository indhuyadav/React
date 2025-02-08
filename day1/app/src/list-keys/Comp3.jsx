// import React from 'react'

import List1 from "./List1"

const Comp3 = () => {
    let demo=[
        {
        name:"indu",
        id: 1,
    },
    {
        name:"pavan",
        id: 2,
    },
    {
        name:"janardhan",
        id: 3,
    }
]
  return (
    <div>
      <List1 main={demo}/>
    </div>
  )
}

export default Comp3
