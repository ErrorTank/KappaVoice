import React, {Fragment} from "react";
import {LoginInputGroup} from "../../../common/login-input-group/login-input-group";
import {translatorListener} from "../../../common/translator-listener/translator-listener";
import {InitTitleLayout} from "../../../layout/init-title-layout";
import {themeServices} from "../../../services/theme/theme-services";
import {customHistory} from "../../../services/history";

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    updateValue = (field) => e => {
        let {value, onChange} = this.props;
        onChange({...value, [field]: e.target.value});
    };

    render() {
        let {value, placeholders} = this.props;
        let {email, password} = value;
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
            }]
        );
        return (
            <InitTitleLayout
                title={translateField("title")}
            >
                <div className="sign-in-form">
                    <div className="form-title">
                        <h1 className="t">
                            {translateField("form-title").top}
                        </h1>
                        <p className="s">
                            {translateField("form-title").bottom}
                        </p>
                    </div>
                    <div className="form-body">
                        <LoginInputGroup
                            className={`email ${curTheme}`}
                            type="text"
                            onChange={this.updateValue("email")}
                            value={email}
                            placeholder={placeholders("email")}
                        />
                        <LoginInputGroup
                            className={`password ${curTheme}`}
                            type="password"
                            onChange={this.updateValue("password")}
                            value={password}
                            placeholder={placeholders("password")}
                        />
                        <div className="forgot-password">
                            <p>
                                Forgot your password?
                            </p>
                        </div>
                    </div>
                    <div className="form-footer">
                        <button className="btn sign-in-btn long-btn">
                            Sign in now!
                        </button>
                        <div className="register">
                            Need an account?
                            <span
                                onClick={() => customHistory.push("/sign-up")}
                            >
                                Register
                            </span>
                        </div>
                    </div>

                </div>
            </InitTitleLayout>
        );
    }
}
