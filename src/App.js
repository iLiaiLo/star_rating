import React, { useState } from "react";
import {FaStar} from "react-icons/fa"

const container={
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  width:"300px",
  background:"lightblue",
  margin:"5px"
}
const star={
  width:"50px",
  height:"50px",
  cursor:"pointer"
}

const content={
  display:"flex",
  height:"80vh",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  gap:"5px",
}

const header={
  padding:"20px",
  letterSpacing:"1px",
  color:"darkblue"
}


function App() {
  const stars=Array(5).fill(0);
  const [starValue,setStarValue]=useState(0);
  const [hoverValue,setHoverValue]=useState(undefined);


  const handleClick=(value)=>{
    setStarValue(value)
  }

  const handleOver=(value)=>{
    setHoverValue(value)
  }

  const handleOut=()=>{
    setHoverValue(undefined)
  }

  return (
    <div style={content}>
        <h1 style={header}>Star rating</h1>
        <div style={container} >
        {stars.map((_,index)=>{
          return (
            <FaStar style={star} color={(hoverValue||starValue)>index?"gold":"grey"}  key={index} 
            onClick={()=>handleClick(index+1)} onMouseOver={()=>handleOver(index+1)} onMouseOut={handleOut} />
          )
        })}
        </div>
        <button onClick={()=>{
          setStarValue(0);
          }}>reset star values</button>
        <button>submit</button>
      </div>

  );
}

export default App;
