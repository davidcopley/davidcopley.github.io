import React, {Component} from 'react';
import Game from "./containers/Game"

class App extends Component {
    constructor(props) {
        super(props)
        this.message1 = "Hello, I am David."
        this.message2 = "Welcome to my website."
        this.state = {
            message1Len: 0,
            message2Len: 0
        }
    }

    componentDidMount = () =>{
        this.renderMessage1()
    }

    renderMessage1 = () => {
        if(this.state.message1Len < this.message1.length){
            this.setState({message1Len:this.state.message1Len+1},()=>setTimeout(this.renderMessage1,500))
            console.log(this.state.message1Len)
        }else{
            setTimeout(this.renderMessage2,2000)
        }
    }

    renderMessage2 = () => {
        if(this.state.message2Len < this.message2.length){
            this.setState({message2Len:this.state.message2Len+1},()=>setTimeout(this.renderMessage2,500))
        }
    }


    render() {
        return (
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#222",
                flexDirection: "column"
            }}>
                <div
                    style={{
                        fontSize: 12,
                        color: "#fff",
                        top: 0,
                        left: 0,
                        letterSpacing: 4,
                        padding: 10
                    }}
                >
                    {this.message1.slice(0,this.state.message1Len)}
                </div>
                <div
                    style={{
                        fontSize: 12,
                        color: "#fff",
                        top: 0,
                        left: 0,
                        letterSpacing: 4,
                        padding: 10
                    }}
                >
                    {this.message2.slice(0,this.state.message2Len)}
                </div>
                <div style={{border: "2px solid #4dc19c"}}>
                    <div style={{display: "flex"}}>
                        <Game style={{transform: "scale(1)", position: "relative"}}/>
                        <Game style={{transform: "scale(1)", position: "relative"}}/>
                    </div>
                    <div style={{display: "flex"}}>
                        <Game style={{transform: "scale(1)", position: "relative"}}/>
                        <Game style={{transform: "scale(1)", position: "relative"}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
