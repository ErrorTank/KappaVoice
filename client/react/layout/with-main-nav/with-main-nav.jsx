import React, {Fragment} from "react";
import {Logo} from "../../common/logo/logo";
import {LanguagePicker} from "../../routes/component/language-picker/language-picker";
import {allLangs} from "../../common/language-fetcher/all-langs";
import {allThemes, themeServices} from "../../services/theme/theme-services";
import {ThemePicker} from "../../routes/component/theme-picker/theme-picker";



export class WithMainNav extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {
        let curTheme = themeServices.getTheme();
        return (
            <div className="with-nav-window">
                <div className={`main-nav ${curTheme}`}>
                    <div className="container">
                        <div className="flex-wrapper">
                            <Logo
                                size="md"
                                brandName={true}
                            />
                            <div className="flex-wrapper right-side">
                                <div className="login-btn">
                                    <button>
                                        Login
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


