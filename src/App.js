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
        <Box 
        value={0}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={1}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={2}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={3}
        toggle={this.toggle}
        on={this.state.on}
        />
        <br />
        <Box 
        value={4}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={5}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={6}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={7}
        toggle={this.toggle}
        on={this.state.on}
        />
        <br />
        <Box 
        value={8}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={9}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={10}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={11}
        toggle={this.toggle}
        on={this.state.on}
        />
        <br />
        <Box 
        value={12}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={13}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value={14}
        toggle={this.toggle}
        on={this.state.on}
        />
        <Box 
        value="15"
        onClick={this.toggle}
        on={this.state.on}
        />
        <br />
        </div>
        </div>
      </div>
    )
  }
  toggle = () => {
    this.setState(state => ({
      [state.target.value]: !state.on
    }))
  }
}

export default App;


//idea: Let's have all the lightboxes be fed into from an array. Call it box data.
//Box data will contain: Position: (number), status: (on/off), and an index if that is necessary.
//We can make it so that clicking on a particular box will cause the adjacent boxes to turn also.
//Essentially, clicking on a box will change status, and change the boxes above, below, left and right.
//It would be CONVENIENT if we could assign a coordinate system, and then x+1, x-1, y+1, y-1 would all change
//in addition to the box at (x,y).
//What we would need to account for is if there is no x coordinate below: ie, a border box
//We could create an if statement, basically catching the "out of bounds" boxes and prevent it from crashing
