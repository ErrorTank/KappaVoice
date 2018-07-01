import React, {Fragment} from "react";
import {LoginInputGroup} from "../../../common/login-input-group/login-input-group";

export class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    updateValue = (field) => e => {
        let {value, onChange} = this.props;
        onChange({...value, [field] : e.target.value});
    };
    render(){
        let {value, placeholders} = this.props;
        let {password, userName, email} = value;
        return(
            <Fragment>
                <LoginInputGroup
                    value={email}
                    className="email"
                    type="text"
                    onChange={this.updateValue("email")}
                    placeholder={placeholders("email")}
                />
                <LoginInputGroup
                    value={userName}
                    className="userName"
                    type="text"
                    onChange={this.updateValue("userName")}
                    placeholder={placeholders("userName")}
                />
                <LoginInputGroup
                    value={password}
                    className="password"
                    type="password"
                    onChange={this.updateValue("password")}
                    placeholder={placeholders("password")}
                />
            </Fragment>
        );
    }
}
