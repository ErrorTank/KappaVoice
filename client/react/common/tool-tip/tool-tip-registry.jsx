import React, {Fragment} from "react";

export class ToolTipRegistry extends React.Component {
    constructor(props) {
        super(props);

        this.defaultState = {
            position: null,
            content: null
        };
        this.state = this.defaultState;

        toolTipRegistry.show = ({content, position}) => {
            this.setState({content, position});
            return {
                close: () => {
                    this.closeTooltip();
                }
            }
        }
    };

    closeTooltip = () => {
        this.setState(this.defaultState);
    };



    render() {
        let {position, content} = this.state;
        if(!position){
            return null;
        }
        return (
            <div className="app-tool-tip"
                 style={{
                     top: position.y,
                     left: position.x
                 }}
            >
                {content}
            </div>
        )
    }
}

export const toolTipRegistry = {};
