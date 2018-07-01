import React, {Fragment} from "react";

export class ToolTipRegistry extends React.Component {
    constructor(props) {
        super(props);

        this.defaultState = {
            mouse: null,
            render: null
        };
        this.state = this.defaultState;

        toolTipRegistry.show = ({render, pos}) => {
            this.setState({render, mouse: pos});
            return {
                close: () => {
                    this.closeTooltip();
                }
            }
        }
    };



    closeTooltip = () => {
        this.setState(this.defaultState);
        console.log("Dadas")
    };



    render() {
        let {mouse, render} = this.state;
        if(!mouse){
            return null;
        }
        return (
            <div className="app-tool-tip"
                 style={{
                     top: mouse.y,
                     left: mouse.x
                 }}
            >
                {render}
            </div>
        )
    }
}

export const toolTipRegistry = {};
