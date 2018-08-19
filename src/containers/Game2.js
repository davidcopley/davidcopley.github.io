import React from "react"

import MapSprite from "../maps/map1.gif"
import CharSprite from "../spriteCss/idle.png"


class Map extends React.Component{
  constructor(props){
    super(props)
    this.state={
      imageLoaded:false
    }
  }
  componentDidMount(){
    const {mapWidth,mapHeight,mapSrc} = this.props
    const img = new Image(mapWidth,mapHeight)
    img.src = mapSrc
    img.onload = () => {
      const context = this.canvas.getContext('2d')
      context.drawImage(img,0,0,img.width,img.height)
      this.setState({imageLoaded:true},()=>console.log(this.state))
    }
  }
  render(){
    const {mapWidth,mapHeight} = this.props
    return(
      <canvas width={mapWidth} height={mapHeight} ref={canvas=>this.canvas = canvas}/>
    )
  }
}

class Player extends React.Component{
  render(){
    const {charSprite, playerWidth, playerHeight} = this.props
    return(
      <div
        style={{
          backgroundImage:charSprite,
        }}
      >

      </div>
    )
  }
}

class Game2 extends React.Component{


  render(){
    return(
      <div style={{width:"100%",height:"100%"}}>
        <Map mapWidth={1036} mapHeight={648} mapSrc={MapSprite}/>
      </div>
    )
  }
}

export default Game2