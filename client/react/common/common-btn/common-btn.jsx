import React from "react";

export class CommonBtn extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        let {className, onClick, children} = this.props;
        return(
            <button
                className={`common-btn ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
}
