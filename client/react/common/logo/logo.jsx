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
        let {className, src, brandName} = this.props;
        return(
            <Link
                to="/"
                className="disable-a-behavior logo"
            >
                <div className={`${className}`}>
                    <img src={src}/>
                    <span className={`brand-name`}>{brandName}</span>
                </div>
            </Link>
        );
    }
}
