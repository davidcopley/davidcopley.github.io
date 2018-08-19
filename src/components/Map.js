import React from "react"

import map1 from "../maps/map1.gif"

class Map extends React.Component{

  componentDidMount(){
    const image = new Image(1036,648)
    image.src = map1
    image.onload = () => {
      const context = this.canvas.getContext('2d')
      context.drawImage(image,0,0,image.width,image.height)
      this.props.collisionCheck((x,y,velocity)=>this.collisionCheck(x,y,velocity))
    }
  }

  collisionCheck = (xPos,yPos,velocity) => {
    const {x,y} = velocity
    const context = this.canvas.getContext('2d')
    const data = Array.from(context.getImageData(xPos+518+x,yPos+324+y,1,1).data)
    return (data.every(e => e === 0))
  }

  componentDidUpdate(){
    this.props.collisionCheck((x,y,velocity)=>this.collisionCheck(x,y,velocity))
  }

  render(){

    return(
      <div
        ref={map=>this.map = map}
        style={{
          // background:`url(${map1})`,
          ...this.props.style
        }}
      >
        <canvas ref={x=>this.canvas = x} width={1036} height={648}/>
      </div>
    )
  }
}

export default Map