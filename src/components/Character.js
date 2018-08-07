import React from "react"
import man from "../sprites/4.png"
class Character extends React.Component{
  render(){
    return(
      <div
        style={{
          width: 1,
          height: 1,
          boxShadow: "5px 5px 3 rgba(0,0,0,0.3)",
          transform: `translateX(calc(50vw)) translateY(calc(50vh))`,
          background: "red",
          position: "absolute",
          ...this.props.style,
          display:"flex",
          justifyContent:"center"
        }}
      >
        <img src={man} height={30} style={{position:"absolute",top:-30}} alt=""/>
      </div>
    )
  }
}

export default Character