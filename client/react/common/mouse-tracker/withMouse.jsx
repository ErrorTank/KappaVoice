import React from "react";
import {MouseTracker} from "./mouse-tracker";

export const withMouse = Comp =>
    class extends React.Component{
        constructor(props){
            super(props);
            this.state={
            };
        };
        render(){
            return(
                <MouseTracker
                    render={mouse => (
                        <Comp
                            {...this.props}
                            mouse={mouse}
                        />
                    )}
                />
            );
        }
    };
