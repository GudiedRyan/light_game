import React from 'react';
import './App.css';
import Box from "./lightbox";


class App extends React.Component {
  renderBox(i) {
    return (
      <Box 
        value={i}
        toggle={this.toggle}
      />
    )
  }
  render() {
    return(
      <div>
        <header><h1>Light Game</h1></header>

        <p>Click the boxes to turn off the lights. Whenever you click a box, that box, and the adjacent boxes will all change.</p>
        <div className="m">
        <div className="board">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
          {this.renderBox(3)}
          <br></br>
          {this.renderBox(4)}
          {this.renderBox(5)}
          {this.renderBox(6)}
          {this.renderBox(7)}
          <br></br>
          {this.renderBox(8)}
          {this.renderBox(9)}
          {this.renderBox(10)}
          {this.renderBox(11)}
          <br></br>
          {this.renderBox(12)}
          {this.renderBox(13)}
          {this.renderBox(14)}
          {this.renderBox(15)}
          <br></br>
        </div>
        </div>
      </div>
    )
  }

}

export default App;
