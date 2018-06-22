import React from "react";

export class CommonInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let {className, ...rest} = this.props;
        return(
            <input
                className={`common-input ${className}`}
                {...rest}
            />
        );
    }
}
