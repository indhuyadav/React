import React, { useState } from 'react'
import video1 from "./2.mp4"
const State1 = () => {
    let[state , setState]=useState(true)
    let demo =() =>{
        let demo1=document.getElementById("demo")
        setState(!state)
        state === true ? demo1.play() : demo1.pause()
    }
  return (
    <div>
      <video src={video1} height="400px"  id='demo' onClick={demo}></video>
    </div>
  )
}

export default State1
