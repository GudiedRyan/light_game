import React from "react";

class Box extends React.Component{
    render() {
        return(
            <button className="lightbox" onClick={this.props.onClick} id={this.props.on? "on" : ""}></button>
        )
    }
    
}

export default Box;