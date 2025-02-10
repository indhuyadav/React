// import React from 'react'
import React from 'react'
import CompB from './CompB'

 export let user = React.createContext()
 export let id=React.createContext()


const CompA = () => {
  return (
    <div>
      <user.Provider value={"indhu"}>
        <id.Provider value={20}>
            <CompB/>
        </id.Provider>
      </user.Provider>
    </div>
  )
}

export default CompA
