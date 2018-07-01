import React from "react";
import ReactDOM from "react-dom";
import {makeCancelable} from "../../utils/async-utils";


export class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x: 0,
            y: 0
        };
        this.removeEvent = null;
    };

    handleMouseMove = () => {

        let handleFunc = (e) =>{
            this.setState({
                x: e.clientX,
                y: e.clientY
            });
        };
        let elem = ReactDOM.findDOMNode(this);
        elem.addEventListener("mousemove", handleFunc);
        return () => elem.removeEventListener("mousemove", handleFunc)

    };

    componentDidMount(){
        this.removeEvent = this.handleMouseMove();
    }



    componentWillUnmount(){

        if(this.removeEvent){
            this.removeEvent();
            this.removeEvent=null;
        }

    }

    render(){
        return React.Children.only(this.props.render(this.state));
    }
}
