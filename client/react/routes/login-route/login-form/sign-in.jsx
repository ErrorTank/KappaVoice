import React, {Fragment} from "react";
import {LoginInputGroup} from "../../../common/login-input-group/login-input-group";
import {translatorListener} from "../../../common/translator-listener/translator-listener";
import {InitTitleLayout} from "../../../layout/init-title-layout";
import {themeServices} from "../../../services/theme/theme-services";
import {customHistory} from "../../../services/history";
import {LoginPage, renderTooltipIfError} from "../login-route";
import {createFrom, getError} from "../../../utils/form/form-utils";
import {validators} from "../../../utils/form/validator";
import {removeWhiteSpace} from "../../../utils/string-utils";

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    updateValue = (field) => e => {
        this.setState({[field]: removeWhiteSpace(e.target.value)})
    };
    lockTooltip = getFormError => (field) => {
        let val = this.state[field];
        if(val === undefined){
            return null
        }
        return renderTooltipIfError(getFormError(field))
    };

    render() {
        let {email, password} = this.state;
        let curTheme = themeServices.getTheme();
        let translateField = translatorListener.translator(
            [{
                name: "title",
                lang: {
                    us: "KappaVoice - Sign In",
                    vn: "KappaVoice - Đăng nhập"
                }
            }, {
                name: "form-title",
                lang: {
                    us: {
                        top: "Welcome back!",
                        bottom: "We excited to see you again!"
                    },
                    vn: {
                        top: "Xin chào!",
                        bottom: "Rất vui được thấy bạn trở lại!"
                    }
                }
            }, {
                name: "forgot",
                lang: {
                    us: "Forgot your password?",
                    vn: "Quên mật khẩu?"
                }
            }, {
                name: "btn",
                lang: {
                    us: "Sign in now!",
                    vn: "Đăng nhập ngay!"
                }
            }, {
                name: "ask",
                lang: {
                    us: "Need an account?",
                    vn: "Chưa có tài khoản?"
                }
            }, {
                name: "navigation",
                lang: {
                    us: "Register",
                    vn: "Đăng ký"
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
                            <div className="sign-in-form login-child-form">
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
                                        className={`email `}
                                        type="text"
                                        onChange={this.updateValue("email")}
                                        value={email || ""}
                                        placeholder={placeholders("email")}
                                        renderErrorTooltip={renderIfNotUndefined("email")}
                                    />
                                    <LoginInputGroup
                                        className={`password`}
                                        type="password"
                                        onChange={this.updateValue("password")}
                                        value={password || ""}
                                        placeholder={placeholders("password")}
                                        renderErrorTooltip={renderIfNotUndefined("password")}
                                    />
                                    <div className="forgot-password">
                                        <p>
                                            {translateField("forgot")}
                                        </p>
                                    </div>
                                </div>
                                <div className="form-footer">
                                    <button className={`btn sign-in-btn long-btn ${lockBtn ? "no-pointer-event disabled": ""}`}>
                                        {translateField("btn")}
                                    </button>
                                    <div className="register">
                                        {translateField("ask")}
                                        <span
                                            onClick={() => customHistory.push("/sign-up")}
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
let validator =  ({userName}) => {
    let {isEmail, notEmpty} = validators;
    return {
        email: [notEmpty],
        password: [notEmpty],
    }
};
