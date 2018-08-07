import React from "react"
import "../spriteCss/megaman.css"
class Character extends React.Component{

  state={
    animFrame:0,
    direction:1,
  }

  componentDidMount(){
    window.requestAnimationFrame(()=>this.nextAnimFrame())
  }

  getAnimation(velocity){

    const {animFrame} = this.state
    const {x,y,} = velocity
    let cssName = ""
    if(y>0){
      cssName+='d'
    }
    if(y<0){
      cssName+='u'
    }
    if(x>0){
      cssName+='r'
    }
    if(x<0){
      cssName+='l'
    }
    if(cssName === ""){
      return "idle"
    }
    return cssName+String(animFrame)
  }

  nextAnimFrame = () => {
    const {animFrame,direction} = this.state
    if(animFrame === 1){
      this.setState({direction:1})
    }else if(animFrame === 2){
      this.setState({direction:-1})
    }
    this.setState({animFrame:animFrame+direction},()=>setTimeout(()=>window.requestAnimationFrame(this.nextAnimFrame),100))
  }

  render(){
    return(
      <div
        style={{
          width: 1,
          height: 1,
          boxShadow: "5px 5px 3 rgba(0,0,0,0.3)",
          left:120,
          top:80,
          background: "red",
          position: "absolute",
          ...this.props.style,
          display:"flex",
          justifyContent:"center",
          transform:'scale(0.7)'
        }}
      >
        <div style={{position:"absolute",top:-30,}} className={this.getAnimation(this.props.velocity)}/>
      </div>
    )
  }
}

export default Character