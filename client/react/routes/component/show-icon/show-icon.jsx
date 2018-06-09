import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {themeServices} from "../../../services/theme/theme-services";

export class ShowIcon extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let {show} = this.props;
        let showingIcon = show ? <i className="fas fa-sort-up"/> : <i className="fas fa-sort-down"/>;
        let curTheme = themeServices.getTheme();
        return(
            <TransitionGroup
                className={`show-icon ${curTheme}`}
            >
                <CSSTransition
                    key={show}
                    timeout={200}
                    classNames="icon"
                >
                        <span className={`icon ${show ? "isShow" : "isHide"} `}>
                            {showingIcon}
                        </span>

                </CSSTransition>
            </TransitionGroup>
        );
    }
}
