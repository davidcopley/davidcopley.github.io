import React, {Component} from 'react';
import Map from "./components/Map"
import './App.css';
import map1 from "./maps/map1.gif"
import internetBackground from "./backgrounds/internetBackground.gif"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: 20,
      y: 30,
      keys: {},
      velocity: {x: 0, y: 0},
      windowWidth: null,
      windowHeight: null
    }

    this.image = new Image(window.innerWidth, window.innerHeight)
    this.image.src = map1
    console.log(this.image)
  }

  speedScale = 2.8
  xSpeed = 1 * this.speedScale
  ySpeed = 0.5 * this.speedScale

  componentDidMount() {
    window.addEventListener('keydown', e => {
      e.preventDefault()
      const {keys} = this.state
      if (!keys[e.keyCode]) {
        this.setState({keys: {...this.state.keys, [e.keyCode]: true}}, () => {
          const velocity = this.getVelocity()
          this.setState({velocity: velocity}, () => this.handleMovement())
        })
      }
    })
    window.addEventListener('keyup', e => {
      e.preventDefault()
      const {keys} = this.state
      if (keys[e.keyCode]) {
        this.setState({keys: {...this.state.keys, [e.keyCode]: false}}, () => {
          const velocity = this.getVelocity()
          this.setState({velocity: velocity}, () => this.handleMovement())
        })

      }
    })
    window.addEventListener('resize', e => {

      this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight}, () => {
        // this.drawImageOnCanvas()
      })

    })
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
    setInterval(() => window.requestAnimationFrame(() => this.handleMovement()), 16)
    // this.drawImageOnCanvas()
  }

  drawImageOnCanvas = () => {
    this.image.width = window.innerWidth
    this.image.height = window.innerHeight
    this.canvas = new HTMLCanvasElement()
    this.canvasContext = this.canvas.getContext("2d")
    this.canvasContext.drawImage(this.image, 0, 0)
    console.log(this.canvasContext)
    console.log('resize')
  }


  getVelocity = () => {
    const {keys} = this.state
    const [left, up, right, down] = [keys[37], keys[38], keys[39], keys[40]]
    let x = 0
    let y = 0
    if (left) x -= this.xSpeed
    if (right) x += this.xSpeed
    if (up) y -= this.ySpeed
    if (down) y += this.ySpeed
    if (x > this.xSpeed) {
      x = 1
    }
    if (x < -this.xSpeed) {
      x = -1
    }
    if (y > this.ySpeed) {
      y = 1
    }
    if (y < -this.ySpeed) {
      y = -1
    }
    return {x, y}
  }

  handleMovement = () => {
    const {velocity} = this.state
    const {x, y} = velocity
    if (x !== 0 || y !== 0) {
      this.setState({x: this.state.x + x, y: this.state.y + y})
    }
  }

  renderScreenBox = () => {
    return (
      <span>
        <div style={{width: "100vw", height: "33vh", position: "fixed", background: "#000"}}/>
        <div style={{width: "100vw", height: "33vh", position: "fixed", bottom: 0, background: "#000"}}/>
        <div style={{width: "25vw", height: "100vh", position: "fixed", left: 0, background: "#000"}}/>
        <div style={{width: "25vw", height: "100vh", position: "fixed", right: 0, background: "#000"}}/>
      </span>
    )
  }

  renderCharacter = () => {
    return (
      <div
        style={{
          width: 20,
          height: 10,
          borderRadius: 5,
          boxShadow: "5px 5px 3 rgba(0,0,0,0.3)",
          transform: `translateX(${this.state.windowWidth / 2}px) translateY(${this.state.windowHeight / 2}px)`,
          background: "rgba(0,0,0,0.8)",
          position: "absolute",
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


  render() {
    const {x, y} = this.state
    console.log(this.state.velocity)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          minWidth: "100vw",
          minHeight: "100vh",

        }}
      >
        <img
          src={internetBackground}
          width={this.state.windowWidth*0.51}
          height={this.state.windowWidth*0.3}
          style={{
            position:"fixed",
            transform:"translateX(25vw) translateY(33vh)"
          }}
          alt=""
        />
        <Map
          style={{
            width: this.state.windowWidth,
            height: this.state.windowHeight,
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transform: `translateX(${-x}px) translateY(${-y}px)`
          }}
        />
        {this.renderCharacter()}
        {this.renderScreenBox()}
        <h1 style={{color: "#fff", position: "fixed", top: 0, width:"100vw"}}>
          Hello World Page
        </h1>

      </div>
    );
  }
}

export default App;
