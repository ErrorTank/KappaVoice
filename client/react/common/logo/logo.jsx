import React from "react";

export class Logo extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let {brandName, size} = this.props;
        return(
            <div className={`logo logo-${size}`}>
                <img src="./assets/img/creepy-ghost.png"/>
                {brandName ? "KappaVoice" : ""}
            </div>
        );
    }
}