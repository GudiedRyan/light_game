import React from 'react';
import './App.css';
// import lightboxdata from './lightboxData';
import Box from "./lightbox";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      victory: false,
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

        <p>Click the boxes to turn off the lights. Whenever you click a box, that box, and the adjacent boxes will all change. Turn off all the lights to win.</p>
        {this.state.victory? <p>You win!!</p> :<p></p>}
        <div className="box">
        <div className="grid">
          {this.state.lightboxdata.map((boxdata,i) =>
            <div className="grid-item" key={i}>
              <Box boxdata={this.state.lightboxdata[i]} toggle={this.toggle}/>
            </div>
          )}
        </div>
        </div>
        <div className="box">
            <button className="app" onClick={this.newGame}>New Game</button>
        </div>
      </div>
    )
  }
  toggle = (event) => {
    const index = event.target.id -1;
    let newdata = [...this.state.lightboxdata];
    newdata[index].on = !newdata[index].on;
    if (index === 0) {
      newdata[1].on = !newdata[1].on
      newdata[3].on = !newdata[3].on
    } else if (index === 1) {
      newdata[0].on = !newdata[0].on
      newdata[2].on = !newdata[2].on
      newdata[4].on = !newdata[4].on
    } else if (index === 2) {
      newdata[1].on = !newdata[1].on
      newdata[5].on = !newdata[5].on
    } else if (index === 3) {
      newdata[0].on = !newdata[0].on
      newdata[4].on = !newdata[4].on
      newdata[6].on = !newdata[6].on
    } else if (index === 4) {
      newdata[1].on = !newdata[1].on
      newdata[3].on = !newdata[3].on
      newdata[5].on = !newdata[5].on
      newdata[7].on = !newdata[7].on
    } else if (index === 5) {
      newdata[2].on = !newdata[2].on
      newdata[4].on = !newdata[4].on
      newdata[8].on = !newdata[8].on
    } else if (index === 6) {
      newdata[3].on = !newdata[3].on
      newdata[7].on = !newdata[7].on
    } else if (index === 7) {
      newdata[8].on = !newdata[8].on
      newdata[6].on = !newdata[6].on
      newdata[4].on = !newdata[4].on
    } else if (index === 8) {
      newdata[5].on = !newdata[5].on
      newdata[7].on = !newdata[7].on
    } 
    this.setState(state => ({
      lightboxdata: newdata
    }))
    if (
      newdata[0].on === false && 
      newdata[1].on === false &&
      newdata[2].on === false &&
      newdata[3].on === false &&
      newdata[4].on === false &&
      newdata[5].on === false &&
      newdata[6].on === false &&
      newdata[7].on === false &&
      newdata[8].on === false
      ) {
        this.setState({
          victory: true
        })
    } else this.setState({
      victory: false
    })
  }
  newGame = () => {
    let resetGame = [...this.state.lightboxdata];
    resetGame[0].on = true
    let rando = Math.floor(Math.random()*2);
    if (rando === 1) {
      resetGame[1].on = true
    } else {
      resetGame[1].on = false
    }
    let rando2 = Math.floor(Math.random()*2);
    if (rando2 === 0) {
      resetGame[2].on = true
    } else {
      resetGame[2].on = false
    }
    let rando3 = Math.floor(Math.random()*2);
    if (rando3 === 0) {
      resetGame[3].on = true
    } else {
      resetGame[3].on = false
    }
    let rando4 = Math.floor(Math.random()*2);
    if (rando4 === 1) {
      resetGame[4].on = true
    } else {
      resetGame[4].on = false
    }
    let rando5 = Math.floor(Math.random()*2);
    if (rando5 === 1) {
      resetGame[5].on = true
    } else {
      resetGame[5].on = false
    }
    let rando6 = Math.floor(Math.random()*2);
    if (rando6 === 1) {
      resetGame[6].on = true
    } else {
      resetGame[6].on = false
    }
    let rando7 = Math.floor(Math.random()*2);
    if (rando7 === 1) {
      resetGame[7].on = true
    } else {
      resetGame[7].on = false
    }
    let rando8 = Math.floor(Math.random()*2);
    if (rando8 === 1) {
      resetGame[8].on = true
    } else {
      resetGame[8].on = false
    }

    this.setState(state => ({
      lightboxdata: resetGame
    }))
  }
}

export default App;

// Math.floor(Math.random()*2)
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

  // toggle2 = (event) => {
  //   const elementsIndex = this.state.lightboxdata.findIndex(element => element.id)
  //   let newArray = [...this.state.lightboxdata];
  //   newArray[elementsIndex].on = !newArray[elementsIndex].on;
  //   newArray[elementsIndex+2].on = !newArray[elementsIndex+2].on;
  //   // newArray[elementsIndex] = {...newArray[elementsIndex], on: !newArray[elementsIndex].on}
  //   this.setState({
  //     lightboxdata: newArray
  //   });
  // }

  //Idea to check if game is won: check each box's state, if they're all off, the display victory