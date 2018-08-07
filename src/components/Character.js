import React from "react"

class Character extends React.Component{
  render(){
    return(
      <div
        style={{
          width: 20,
          height: 10,
          borderRadius: 5,
          boxShadow: "5px 5px 3 rgba(0,0,0,0.3)",
          transform: `translateX(calc(50vw - 10px)) translateY(calc(50vh - 5px))`,
          background: "rgba(0,0,0,0.8)",
          position: "fixed",
          ...this.props.style
        }}
      >
        <div style={{position: "relative", left: 8}}>
          <div
            style={{
              width: 10,
              height: 15,
              borderRadius: 5,
              position: "absolute",
              top: -20,
              left: -2.5,
              background: "#9010ff"
            }}
          />
          <div
            style={{
              width: 4,
              height: 15,
              borderRadius: 3,
              position: "absolute",
              top: -10,
              left: 4,
              background: "green"
            }}
          />
          <div
            style={{
              width: 15,
              height: 15,
              borderRadius: 5,
              position: "absolute",
              top: -30,
              left: -5,
              background: "#521cf3"
            }}
          />
          <div
            style={{
              width: 4,
              height: 15,
              borderRadius: 3,
              position: "absolute",
              top: -10,
              left: -3,
              background: "green"
            }}
          />
          <div
            style={{
              width: 4,
              height: 15,
              borderRadius: 3,
              position: "absolute",
              top: -15,
              left: 10,
              background: "green",
              transform: "rotate(-20deg)"
            }}
          />
          <div
            style={{
              width: 4,
              height: 15,
              borderRadius: 3,
              position: "absolute",
              top: -15,
              left: -10,
              background: "green",
              transform: "rotate(20deg)"
            }}
          />


        </div>
      </div>
    )
  }
}

export default Character