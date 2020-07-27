import React from "react";

class Box extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         on: false
    //     }
    // }
    render() {
        return(
            <button className="lightbox" onClick={this.props.toggle} id={this.props.on? "on" : ""}></button>
        )
    }
    // toggle = () => {
    //     this.setState(state => ({
    //       on: !state.on
    //     }))
    //   }
}

export default Box;