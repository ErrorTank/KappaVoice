import React from "react";
import {toolTipRegistry} from "./tool-tip-registry";
import ReactDOM from "react-dom";


export class ToolTip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.removeEvent = null;
        this.tooltip = null;
        this.elem = null;
    };

    setEvent = () => {
        this.elem = ReactDOM.findDOMNode(this);
        console.log(this.elem);
        this.elem.addEventListener("mousemove", this.showToolTip);
        this.elem.addEventListener("mouseleave", this.hideToolTip)
    };

    showToolTip = e => {
        let {content} = this.props;
        this.setState({show: true});
        console.log("enter")
        this.tooltip = toolTipRegistry.show({
            content,
            pos: {
                x: e.clientX,
                y: e.clientY
            }
        });
    };

    hideToolTip = e => {
        this.setState({show: false});
         this.tooltip.close();
        console.log("leave")
        //this.tooltip = null;
    };

    componentDidMount() {
        this.removeEvent = this.setEvent();
    }

    componentWillUnmount() {
        if (this.removeEvent) {
            this.removeEvent();
            this.removeEvent = null;
            this.elem = null;
        }

    }

    render() {
        return React.Children.only(this.props.children)
    }
}

