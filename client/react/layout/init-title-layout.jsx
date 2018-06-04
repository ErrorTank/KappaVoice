import React from "react";

export class InitTitleLayout extends React.Component{
    constructor(props){
        super(props);
        let {title} = props;
        document.title = title;
    };
    render(){
        return this.props.children;
    }
}