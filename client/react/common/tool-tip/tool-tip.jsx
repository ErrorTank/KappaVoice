import React from "react";
import {toolTipRegistry} from "./tool-tip-registry";
import ReactDOM from "react-dom";
import {withMouse} from "../mouse-tracker/withMouse";

export const ToolTip = withMouse(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.removeEvent = null;
            this.tooltip = null;
        };

        setEvent = () => {
            let elem = ReactDOM.findDOMNode(this);
            let showToolTip = e => {
                this.tooltip = toolTipRegistry.show({
                    content: this.props.content,
                    position: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
            };
            let hideToolTip = e => {
                if (this.tooltip) {
                    this.tooltip.close();
                    this.tooltip = null;
                }
            };
            elem.addEventListener("mousemove", showToolTip);
            elem.addEventListener("mouseleave", hideToolTip);
            return () => {
                elem.removeEventListener("mousemove", showToolTip);
                elem.removeEventListener("mouseleave", hideToolTip);

            }
        };

        componentDidMount() {
            this.removeEvent = this.setEvent();
        }

        componentWillUnmount() {
            if (this.removeEvent) {
                this.removeEvent();
                this.removeEvent = null;
            }

        }
        render() {

            return React.Children.only(this.props.children)
        }
    }
);


