import React from 'react';
import Box from './lightbox'
class LargerGame extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          victory: false,
          lightboxdata: [{
            id: 1,
            on: true
        },
        {
            id: 2,
            on: true
        },
        {
            id: 3,
            on: true
        },
        {
            id: 4,
            on: true
        },
        {
            id: 5,
            on: true
        },
        {
            id: 6,
            on: true
        },
        {
            id: 7,
            on: true
        },
        {
            id: 8,
            on: true
        },
        {
            id: 9,
            on: true
        },
        {
            id: 10,
            on: true
        },
        {
            id: 11,
            on: true
        },
        {
            id: 12,
            on: true
        },
        {
            id: 13,
            on: true
        },
        {
            id: 14,
            on: true
        },
        {
            id: 15,
            on: true
        },
        {
            id: 16,
            on: true
        },
    ]
        }
      }
      render () {
          return(
              <div>
                  {this.state.victory? <p>You win!!</p> :<p></p>}
                  <div className="box">
                    <div className="grid2">
                    {this.state.lightboxdata.map((boxdata,i) =>
                    <div className="grid-item2" key={i}>
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
          newdata[4].on = !newdata[4].on
        } else if (index === 1) {
          newdata[0].on = !newdata[0].on
          newdata[2].on = !newdata[2].on
          newdata[5].on = !newdata[5].on
        } else if (index === 2) {
          newdata[1].on = !newdata[1].on
          newdata[3].on = !newdata[3].on
          newdata[6].on = !newdata[6].on
        } else if (index === 3) {
          newdata[2].on = !newdata[2].on
          newdata[7].on = !newdata[7].on
        } else if (index === 4) {
          newdata[0].on = !newdata[0].on
          newdata[5].on = !newdata[5].on
          newdata[8].on = !newdata[8].on
        } else if (index === 5) {
          newdata[1].on = !newdata[1].on
          newdata[4].on = !newdata[4].on
          newdata[6].on = !newdata[6].on
          newdata[9].on = !newdata[9].on
        } else if (index === 6) {
          newdata[2].on = !newdata[2].on
          newdata[5].on = !newdata[5].on
          newdata[7].on = !newdata[7].on
          newdata[10].on = !newdata[10].on
        } else if (index === 7) {
          newdata[3].on = !newdata[3].on
          newdata[6].on = !newdata[6].on
          newdata[11].on = !newdata[11].on
        } else if (index === 8) {
          newdata[4].on = !newdata[4].on
          newdata[9].on = !newdata[9].on
          newdata[12].on = !newdata[12].on
        } else if (index === 9) {
            newdata[5].on = !newdata[5].on
            newdata[8].on = !newdata[8].on
            newdata[10].on = !newdata[10].on
            newdata[13].on = !newdata[13].on
        } else if (index === 10) {
            newdata[6].on = !newdata[6].on
            newdata[9].on = !newdata[9].on
            newdata[11].on = !newdata[11].on
            newdata[14].on = !newdata[14].on
        } else if (index === 11) {
            newdata[7].on = !newdata[7].on
            newdata[10].on = !newdata[10].on
            newdata[15].on = !newdata[15].on
        } else if (index === 12) {
            newdata[8].on = !newdata[8].on
            newdata[13].on = !newdata[13].on
        } else if (index === 13) {
            newdata[9].on = !newdata[9].on
            newdata[12].on = !newdata[12].on
            newdata[14].on = !newdata[14].on
        } else if (index === 14) {
            newdata[10].on = !newdata[10].on
            newdata[13].on = !newdata[13].on
            newdata[15].on = !newdata[15].on
        } else if (index === 15) {
            newdata[11].on = !newdata[11].on
            newdata[14].on = !newdata[14].on
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
          newdata[8].on === false &&
          newdata[9].on === false &&
          newdata[10].on === false &&
          newdata[11].on === false &&
          newdata[12].on === false &&
          newdata[13].on === false &&
          newdata[14].on === false &&
          newdata[15].on === false
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
        resetGame[1].on = true
        resetGame[2].on = true
        resetGame[3].on = true
        resetGame[4].on = true
        resetGame[5].on = true
        resetGame[6].on = true
        resetGame[7].on = true
        resetGame[8].on = true
        resetGame[9].on = true
        resetGame[10].on = true
        resetGame[11].on = true
        resetGame[12].on = true
        resetGame[13].on = true
        resetGame[14].on = true
        resetGame[15].on = true
        this.setState(state => ({
          lightboxdata: resetGame,
          victory: false
        }))
    }
}

export default LargerGame;