import React from "react";

export class ThemeBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let {theme, size} = this.props;
        return(
            <div className={`theme-box ${theme} ${size}`}>
                <div className="part one">

                </div>
                <div className="part two">

                </div>
            </div>
        );
    }
}
