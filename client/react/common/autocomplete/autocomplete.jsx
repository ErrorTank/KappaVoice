import React from "react";

export class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let {render, className, list} = this.props;
        return(
            <div className={`auto-complete ${className}`}>
                {list.map((item, i) => (
                    <div
                        key={i}
                        className="list-item"
                    >
                        {render(item)}
                    </div>
                ))
                }
            </div>
        );
    }
}
