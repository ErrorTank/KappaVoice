import React from "react";
import {getElemByTag} from "../../utils/dom-utils";
import {addStyle} from "../../utils/elem-utils";

export class InitBg extends React.Component{
    constructor(props){
        super(props);
        const bgColor = {
            "dark-light": "#1a1a1a"
        };
        ["html","body"].forEach(tag => {
            addStyle(getElemByTag(tag), {"backgroundColor": bgColor[props.themeType]});
        });
    };
    render(){
        return this.props.children;
    }
}