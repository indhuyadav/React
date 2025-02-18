// import React from 'react'
// import Hoc from './Hoc'

// const Child = ({name}) => {
//   return (
//     <div>
//       <h1>My name is {name}</h1>
//     </div>
//   )
// }

// export default Hoc(Child)

//---------------------------------------------

// import React from 'react'
// import Hoc from './Hoc'

// const Child = ({state,demo}) => {
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={demo}>Click</button>
//     </div>
//   )
// }

// export default Hoc(Child)

//------------------------------------------

// import React from 'react'
// import Hoc from './Hoc'

// const Child = ({arr1}) => {
//   return (
//     <div>
//       {
//         arr1.map((value, index)=>{
//             return(
//                 <li key={index}>{value}</li>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Hoc(Child)

//---------------------------------------------

import React from 'react'
import Hoc from './Hoc'

const Child = ({arr1}) => {
  return (
    <div>
      <table border= "2px solid"> 
        <thead>
            <tr>
                <th>name</th>
                <th>id</th>
                <th>role</th>
            </tr>
        </thead>
        <tbody>
            {
                arr1.map((x)=>{
                    return(
                        <>
                          <tr>
                            <td>{x.name}</td>
                            <td>{x.id}</td>
                            <td>{x.role}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Hoc(Child)
