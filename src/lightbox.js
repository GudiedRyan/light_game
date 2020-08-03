import React from "react";

class Box extends React.Component{
    render() {
        return(
            <button 
                className={this.props.boxdata.on? "on" : "off"} 
                x={this.props.boxdata.x} 
                y={this.props.boxdata.y} 
                id={this.props.boxdata.id}
            >
            </button>
        )
    }
}

export default Box;

//<Box data =lightBox.data/>
//In the file Box.js
//function Box(props.data){etc…}