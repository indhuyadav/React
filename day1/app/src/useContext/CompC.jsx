// // import React from 'react'
// import { user, id } from "./CompA"

// const CompC = () => {
//   return (
//     <div>
//       {
//         <user.Consumer>
//             {
//                 (name)=>{
//                     return(
//                         <>
//                         {
//                             <id.Consumer>
//                                 {
//                                     (num)=>{
//                                         return(
//                                             <>
//                                             <h1>My name is:{name}</h1>
//                                             <h1>my id is: {num} </h1>
//                                             </>
//                                         )
//                                     }
//                                 }
//                             </id.Consumer>
//                         }
//                         </>
//                     )
//                 }
//             }
//         </user.Consumer>
//       }
//     </div>
//   )
// }

// export default CompC
// import React from 'react'
import {userName,id} from "./CompA.jsx"
import { useContext } from 'react'

const CompC = () => {
    let name= useContext(userName)
    let id1= useContext(id)
  return (
    <div>
      {name} and {id1}
    </div>
  )
}

export default CompC
