import React from "react";
import {CommonBtn} from "../../../../common/common-btn/common-btn";
import {themeServices} from "../../../../services/theme/theme-services";
import {CommonInput} from "../../../../common/common-input/common-input";

export class WelcomeActions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show: false,
            name: ""
        };
    };
    render(){
        let {show, name} = this.state;
        let curTheme = themeServices.getTheme();
        let {btnText, inputPlaceholder} = this.props;
        return(
            <div className={`welcome-actions ${curTheme}`}>
                {show ? (
                    <div className="username-form">
                        <CommonInput
                            className="username-input"
                            type="text"
                            onChange={(e) => name.length <=50 && this.setState({name: e.target.value})}
                            placeholder={inputPlaceholder}
                        />
                        <CommonBtn
                            className="register-username"
                            onClick={() => console.log("register user: "+ name)}
                        >
                            <span className="icon">
                                <i className="fas fa-arrow-right"/>
                            </span>
                        </CommonBtn>
                    </div>
                ) : (
                    <CommonBtn
                        className="use-app"
                        onClick={() => this.setState({show: true})}
                    >
                        {btnText}
                    </CommonBtn>
                )}
            </div>
        );
    }
}
