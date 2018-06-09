import React from "react";
import {Link} from "react-router-dom";
import {themeServices} from "../../services/theme/theme-services";

export class Logo extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let {brandName, size} = this.props;
        let curTheme = themeServices.getTheme();
        return(
            <Link
                to="/"
                className="disable-a-behavior logo-wrap"
            >
                <div className={`logo logo-${size} ${curTheme}`}>
                    <img src={`./assets/img/creepy-ghost-${curTheme}.png`}/>
                    <span className={`brand-name`}>{brandName ? "KappaVoice" : ""}</span>
                </div>
            </Link>
        );
    }
}
