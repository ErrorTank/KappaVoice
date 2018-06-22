import React from "react";


export class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x: 0,
            y: 0
        };
    };

    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    };

    render(){
        return (
            <div className="mouse-tracker"
                 onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
        );
    }
}
