import React, {Component} from 'react';
import Map from "./components/Map"
import Character from "./components/Character"
import ScreenBox from "./components/ScreenBox"
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
    this.speedScale = 2.8
    this.xSpeed = 1 * this.speedScale
    this.ySpeed = 0.5 * this.speedScale
  }



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
    return {x, y}
  }

  handleMovement = () => {
    const {velocity} = this.state
    const {x, y} = velocity
    if (x !== 0 || y !== 0) {
      this.setState({x: this.state.x + x, y: this.state.y + y})
    }
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
          width={242}
          height={160}
          style={{
            position:"fixed",
            transform:"translateX(calc(50vw - 120px)) translateY(calc(50vh - 80px))"
          }}
          alt=""
        />
        <Map
          style={{
            width: 1036,
            height: 648,
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            transform: `translateX(${-x}px) translateY(${-y}px)`
          }}
        />
        <Character/>
        <ScreenBox/>
        <h1 style={{color: "#fff", position: "fixed", top: 0, width:"100vw"}}>
          Hello World Page
        </h1>

      </div>
    );
  }
}

export default App;
