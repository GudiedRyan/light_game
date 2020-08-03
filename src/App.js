import React from 'react';
import './App.css';
// import lightboxdata from './lightboxData';
import Box from "./lightbox";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxdata: [{
        id: 1,
        x: 0,
        y: 2,
        on: true
    },
    {
        id: 2,
        x: 1,
        y: 2,
        on: false
    },
    {
        id: 3,
        x: 2,
        y: 2,
        on: true
    },
    {
        id: 4,
        x: 0,
        y: 1,
        on: true
    },
    {
        id: 5,
        x: 1,
        y: 1,
        on: false
    },
    {
        id: 6,
        x: 2,
        y: 1,
        on: false
    },
    {
        id: 7,
        x: 0,
        y: 0,
        on: false
    },
    {
        id: 8,
        x: 1,
        y: 0,
        on: true
    },
    {
        id: 9,
        x: 2,
        y: 0,
        on: true
    }
]
    }
  }
  render() {
    return(
      <div>
        <header><h1>Light Game</h1></header>

        <p>Click the boxes to turn off the lights. Whenever you click a box, that box, and the adjacent boxes will all change.</p>
        <div className="grid">
          {this.state.lightboxdata.map((boxdata,i) =>
            <div className="grid-item" key={i}>
              <Box boxdata={this.state.lightboxdata[i]} toggle={this.toggle}/>
            </div>
          )}
        </div>
      </div>
    )
  }
  toggle = () => {
    const elementsIndex = this.state.lightboxdata.findIndex(element => element.id)
    let newArray = [...this.state.lightboxdata];
    newArray[elementsIndex] = {...newArray[elementsIndex], on: !newArray[elementsIndex].on}
    this.setState({
      lightboxdata: newArray
    });
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
//start with 3x3

//Current Issue: While data is imported, I can't seem to get it into the state
//In other words, I have this data with no way to manipulate it that I know of
// ;-;