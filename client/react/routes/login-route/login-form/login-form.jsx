import React, {Fragment} from "react";
import {translatorListener} from "../../../common/translator-listener/translator-listener";
import {Route} from "react-router-dom"
import {SignUp} from "./sign-up";
import {SignIn} from "./sign-in";
import {themeServices} from "../../../services/theme/theme-services";

export class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){

        let formPlaceholder = translatorListener.translator([
            {
                name: "email",
                lang: {
                    us: "Email",
                    vn: "Email"
                }
            }, {
                name: "password",
                lang: {
                    us: "Password",
                    vn: "Mật khẩu"
                }
            }, {
                name: "userName",
                lang: {
                    us: "Username",
                    vn: "Tên hiển thị"
                }
            }, {
                name: "confirm",
                lang: {
                    us: "Confirm password",
                    vn: "Nhập lại mật khẩu"
                }
            }
        ]);
        let curTheme = themeServices.getTheme();
        return(
            <div className={`login-form ${curTheme}`}>
                {this.props.render(formPlaceholder)}
            </div>
        );
    }
}
