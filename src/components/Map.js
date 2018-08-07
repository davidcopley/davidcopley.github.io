import React from "react"

import map1 from "../maps/map1.gif"

class Map extends React.Component{

  componentDidMount(){
    const image = new Image(1036,648)
    image.src = map1
    const context = this.canvas.getContext('2d')
    context.drawImage(image,0,0,image.width,image.height)
    console.log(context)
  }

  render(){
    return(
      <div
        style={{
          background:`url(${map1})`,
          ...this.props.style
        }}
      >
        <canvas ref={x=>this.canvas = x} style={{display:"hidden"}}/>
      </div>
    )
  }
}

export default Map