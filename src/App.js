import React, {Component} from 'react';
import Game from "./containers/Game"

class App extends Component {
  render() {
    return (
      <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center",background:"#222"}}>
        <Game style={{transform:"scale(3)"}}/>
      </div>
    )
  }
}

export default App;
