import React, {Fragment} from "react";
import {LoginInputGroup} from "../../../common/login-input-group/login-input-group";
import {InitTitleLayout} from "../../../layout/init-title-layout";
import {translatorListener} from "../../../common/translator-listener/translator-listener";
import {customHistory} from "../../../services/history";
import {LoginPage, renderTooltipIfError} from "../login-route";
import {themeServices} from "../../../services/theme/theme-services";
import {createFrom, getError} from "../../../utils/form/form-utils";
import {validators} from "../../../utils/form/validator";
import {removeWhiteSpace} from "../../../utils/string-utils";

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    updateValue = (field) => e => {
        let val = field === "userName" ? e.target.value : removeWhiteSpace(e.target.value);
        this.setState({
            [field]: val
        });
    };

    lockTooltip = getFormError => (field) => {
        let val = this.state[field];
        if(val === undefined){
            return null
        }
        return renderTooltipIfError(getFormError(field))
    };

    render() {
        let {password, userName, email, confirm} = this.state;
        let curTheme = themeServices.getTheme();
        let translateField = translatorListener.translator(
            [{
                name: "title",
                lang: {
                    us: "KappaVoice - Sign Up",
                    vn: "KappaVoice - Đăng ký"
                }
            }, {
                name: "form-title",
                lang: {
                    us: {
                        top: "Register to join",
                        bottom: "KappaVoice"
                    },
                    vn: {
                        top: "Đăng ký để tham gia",
                        bottom: "KappaVoice"
                    }
                }
            }, {
                name: "btn",
                lang: {
                    us: "Sign Up",
                    vn: "Đăng ký"
                }
            }, {
                name: "ask",
                lang: {
                    us: "Already have an account?",
                    vn: "Đã có tài khoản?"
                }
            }, {
                name: "navigation",
                lang: {
                    us: "To Sign in",
                    vn: "Về trang đăng nhập"
                }
            }]
        );
        let signUpForm = createFrom(this.state);
        let paths = signUpForm.getInvalidPaths(validator(this.state));
        let getFormError = getError(paths);
        let renderIfNotUndefined = this.lockTooltip(getFormError);
        let lockBtn = paths.length;
        return (

            <InitTitleLayout
                title={translateField("title")}
            >
                <LoginPage>
                    {
                        placeholders => (
                            <div className="sign-up-form login-child-form">
                                <div className="form-title">
                                    <h1 className="t">
                                        {translateField("form-title").top}
                                    </h1>
                                    <p className="s">
                                        {translateField("form-title").bottom}
                                    </p>
                                </div>
                                <div className={`form-body ${curTheme}`}>
                                    <LoginInputGroup
                                        value={email || ""}
                                        className="email"
                                        type="text"
                                        onChange={this.updateValue("email")}
                                        placeholder={placeholders("email")}
                                        renderErrorTooltip={renderIfNotUndefined("email")}
                                    />
                                    <LoginInputGroup
                                        value={userName || ""}
                                        className="userName"
                                        type="text"
                                        onChange={this.updateValue("userName")}
                                        placeholder={placeholders("userName")}
                                        renderErrorTooltip={renderIfNotUndefined("userName")}
                                    />
                                    <LoginInputGroup
                                        value={password || ""}
                                        className="password"
                                        type="password"
                                        onChange={this.updateValue("password")}
                                        placeholder={placeholders("password")}
                                        renderErrorTooltip={renderIfNotUndefined("password")}
                                    />
                                    <LoginInputGroup
                                        value={confirm || ""}
                                        className="confirm"
                                        type="password"
                                        onChange={this.updateValue("confirm")}
                                        placeholder={placeholders("confirm")}
                                        renderErrorTooltip={renderIfNotUndefined("confirm")}
                                    />
                                </div>
                                <div className="form-footer">
                                    <button className={`btn sign-in-btn long-btn ${lockBtn ? "no-pointer-event disabled": ""}`}
                                    >
                                        {translateField("btn")}
                                    </button>
                                    <div className="register">
                                        {translateField("ask")}
                                        <span
                                            onClick={() => customHistory.push("/sign-in")}
                                        >
                                            {translateField("navigation")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </LoginPage>
            </InitTitleLayout>
        );
    }
}
let validator =  ({userName, password}) => {
    let {isEmail, isPassword, lengthRange, passMatched, passNotContainUsername, notEmpty} = validators;
    return {
        email: [notEmpty ,isEmail],
        userName: [lengthRange({min:3, max:30})],
        password: [lengthRange({min:6, max:30}), isPassword, passNotContainUsername(userName)],
        confirm: [notEmpty, passMatched(password)]
    }
};
