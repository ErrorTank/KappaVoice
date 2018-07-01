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
            signIn: {
                email: "",
                password: ""
            },
            signUp: {
                email: "",
                userName: "",
                password: ""
            }
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
                    vn: "Password"
                }
            }, {
                name: "userName",
                lang: {
                    us: "Username",
                    vn: "Tên hiển thị"
                }
            }
        ]);
        let {signIn, signUp} = this.state;
        let curTheme = themeServices.getTheme();
        return(
            <div className={`login-form ${curTheme}`}>
                <Route
                    path="/sign-in"
                    render={props => (
                        <SignIn
                            {...props}
                            onChange={signIn => this.setState({signIn})}
                            value={signIn}
                            placeholders={formPlaceholder}
                        />
                    )}
                />
                <Route
                    path="/sign-up"
                    render={props => (
                        <SignUp
                            {...props}
                            onChange={signUp => this.setState({signUp})}
                            value={signUp}
                            placeholder={formPlaceholder}
                        />
                    )}
                />
            </div>
        );
    }
}
