import React from 'react';
import './App.css';
import Box from "./lightbox";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    }
  }
  render() {
    return(
      <div>
        <header><h1>Light Game</h1></header>

        <p>Click the boxes to turn off the lights. Whenever you click a box, that box, and the adjacent boxes will all change.</p>
        <div className="m">
        <div className="board">
          <Box coordinates={[0,3]} onClick={this.toggle}/>
          <Box coordinates={[1,3]} onClick={this.toggle}/>
          <Box coordinates={[2,3]} onClick={this.toggle}/>
          <Box coordinates={[3,3]} onClick={this.toggle}/>
          <br></br>
          <Box coordinates={[0,2]} on={true}/>
          <Box coordinates={[1,2]}/>
          <Box coordinates={[2,2]}/>
          <Box coordinates={[3,2]}/>
          <br></br>
          <Box coordinates={[0,1]}/>
          <Box coordinates={[1,1]}/>
          <Box coordinates={[2,1]}/>
          <Box coordinates={[3,1]}/>
          <br></br>
          <Box coordinates={[0,0]}/>
          <Box coordinates={[1,0]}/>
          <Box coordinates={[2,0]}/>
          <Box coordinates={[3,0]}/>
          <br></br>
        </div>
        </div>
      </div>
    )
  }
  toggle = () => {
    this.setState(state => ({
      on: !state.on
    }))
  }
}

export default App;
