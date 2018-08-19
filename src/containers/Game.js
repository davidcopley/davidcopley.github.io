import React, {Component} from 'react';
import Map from "../components/Map"
import Character from "../components/Character"
import map1 from "../maps/map1.gif"
import internetBackground from "../backgrounds/internetBackground.gif"

class Game extends Component {


    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
            keys: {},
            velocity: {x: 0, y: 0},
            windowWidth: null,
            windowHeight: null,
            colliding: false,
            speedScale: 1.2

        }

        this.image = new Image(window.innerWidth, window.innerHeight)
        this.image.src = map1
        this.xSpeed = 1
        this.ySpeed = 0.5
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
    }


    getVelocity = () => {
        const {speedScale, keys} = this.state
        const [left, up, right, down] = [keys[37], keys[38], keys[39], keys[40]]
        let x = 0
        let y = 0
        if (left) x -= this.xSpeed * speedScale
        if (right) x += this.xSpeed * speedScale
        if (up) y -= this.ySpeed * speedScale
        if (down) y += this.ySpeed * speedScale
        return {x, y}
    }

    handleMovement = () => {
        const {velocity} = this.state
        const {x, y} = velocity
        if (this.colliding) {
            this.setState({x: this.state.x, y: this.state.y})
        }
        else if ((x !== 0 || y !== 0)) {
            this.setState({x: this.state.x + x, y: this.state.y + y})
        }
    }

    collisionCheck = (func) => {
        const {x, y, velocity} = this.state
        this.colliding = func(x, y, velocity)
    }

    teleportPoints = [
        {x:-56,y:-11},
        {x:360,y:-197},
        {x:-30,y:250},
    ]

    getRandomTPPoint = () => {
        return this.teleportPoints[Math.floor(Math.random() * this.teleportPoints.length)];
    }

    render() {
        const {x, y} = this.state
        if((x <= -242 && y <= -272) || (x >= 253 && y >= 298)) {
            this.setState(this.getRandomTPPoint())
        }
        return (
            <div
                style={{
                    width: 240,
                    height: 160,
                    overflow: "hidden",
                    position: "absolute",
                    ...this.props.style
                }}
            >
                <img
                    src={internetBackground}
                    width={242}
                    height={160}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0
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
                        left: 'calc(50% - 518px)',
                        top: 'calc(50% - 324px)',
                        transform: `translateX(${-x}px) translateY(${-y}px)`
                    }}
                    collisionCheck={this.collisionCheck}
                />
                <Character velocity={this.state.velocity}/>
            </div>
        );
    }
}

export default Game;
