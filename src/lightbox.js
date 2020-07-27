import React from "react";

class Box extends React.Component{
    constructor(props){
        super(props);
        this.state={
            on: false
        }
    }
    render() {
        return(
            <button className="lightbox" onClick={this.toggle} id={this.state.on? "on" : ""}>{this.props.value}</button>
        )
    }
    toggle = () => {
        this.setState(state => ({
          on: !state.on
        }))
      }
}

export default Box;