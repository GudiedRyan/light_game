import React from "react";

class Box extends React.Component{
    render() {
        return(
            <button 
                className={this.props.boxdata.on? "on" : "off"} 
                x={this.props.boxdata.x} 
                y={this.props.boxdata.y} 
                id={this.props.boxdata.id}
                onClick={this.props.toggle}
            >
            </button>
        )
    }
    toggle = () => {
        this.props.toggle()
    }
}

export default Box;
