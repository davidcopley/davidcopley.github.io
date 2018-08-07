import React from "react"

class ScreenBox extends React.Component{
  render(){
    return(
      <span>
        <div style={{width: "100vw", height: "calc(50vh - 80px)", position: "fixed", background: "#000"}}/>
        <div style={{width: "100vw", height: "calc(50vh - 80px)", position: "fixed", bottom: 0, background: "#000"}}/>
        <div style={{width: "calc(50vw - 120px)", height: "100vh", position: "fixed", left: 0, background: "#000"}}/>
        <div style={{width: "calc(50vw - 120px)", height: "100vh", position: "fixed", right: 0, background: "#000"}}/>
      </span>
    )
  }
}

export default ScreenBox