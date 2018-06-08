import React from "react";
import {Link} from "react-router-dom";

export class Logo extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let {brandName, size} = this.props;
        return(
            <Link
                to="/"
                className="disable-a-behavior logo-wrap"
            >
                <div className={`logo logo-${size}`}>
                    <img src="./assets/img/creepy-ghost.png"/>
                    <span className="brand-name">{brandName ? "KappaVoice" : ""}</span>
                </div>
            </Link>
        );
    }
}