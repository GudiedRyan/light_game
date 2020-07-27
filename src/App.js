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
