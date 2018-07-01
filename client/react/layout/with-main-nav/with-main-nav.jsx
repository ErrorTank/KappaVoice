import React, {Fragment} from "react";
import {Logo} from "../../common/logo/logo";
import {LanguagePicker} from "../../routes/component/language-picker/language-picker";
import {allLangs, langServices} from "../../services/lang/lang";
import {allThemes, themeServices} from "../../services/theme/theme-services";
import {ThemePicker} from "../../routes/component/theme-picker/theme-picker";
import {translatorListener} from "../../common/translator-listener/translator-listener";
import {customHistory} from "../../services/history";



export class WithMainNav extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {
        let translateField = translatorListener.translator([
            {
                name: "btnContent",
                lang: {
                    us: "Login",
                    vn: "Đăng nhập"
                }
            }
        ]);
        let curTheme = themeServices.getTheme();
        let logoImg = {
            "dark-light": "black",
            "sky": "white"
        };
        return (
            <div className="with-nav-window">
                <div className={`main-nav ${curTheme}`}>
                    <div className="container">
                        <div className="flex-wrapper">
                            <Logo
                                className={`app-logo logo-${curTheme}`}
                                src={`./assets/img/creepy-ghost-${logoImg[curTheme]}.svg`}
                                brandName="KappaVoice"
                            />
                            <div className="flex-wrapper right-side">
                                <div className="login-btn"
                                     onClick={() => customHistory.push("/sign-in")}
                                >
                                    <button>
                                        {translateField("btnContent")}
                                    </button>
                                </div>
                                <div className="separate"/>
                                <LanguagePicker
                                    langs={allLangs}
                                />
                                <ThemePicker
                                    themes={allThemes}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="children-wrap">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


