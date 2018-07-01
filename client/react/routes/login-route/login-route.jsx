import React from "react";
import {InitTitleLayout} from "../../layout/init-title-layout";
import {translatorListener} from "../../common/translator-listener/translator-listener";
import {Logo} from "../../common/logo/logo";
import {LoginForm} from "./login-form/login-form";
import {themeServices} from "../../services/theme/theme-services";

export class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let curTheme = themeServices.getTheme();
        let logoImg = {
            "dark-light": "white",
            "sky": "black"
        };
        return(
            <div className="login-page">
                <div className={`brand-logo`}>
                    <Logo
                        className={`app-logo logo-${curTheme}`}
                        src={`./assets/img/creepy-ghost-${logoImg[curTheme]}.svg`}
                        brandName="KappaVoice"
                    />
                </div>
                <div className="login-form">
                    <LoginForm/>
                </div>
            </div>
        );
    }
}
