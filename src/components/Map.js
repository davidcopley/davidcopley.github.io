import React from "react"

import map1 from "../maps/map1.gif"

class Map extends React.Component{
  render(){
    return(
      <div
        style={{
          background:`url(${map1})`,
          ...this.props.style
        }}
      >

      </div>
    )
  }
}

export default Map