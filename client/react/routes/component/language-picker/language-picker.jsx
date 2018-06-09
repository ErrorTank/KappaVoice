import React from "react";
import {LanguageFetcher} from "../../../common/language-fetcher/language-fetcher";
import {themeServices} from "../../../services/theme/theme-services";
import {ShowIcon} from "../show-icon/show-icon";

export class LanguagePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false
        };
    };

    render() {
        let {show} = this.state;
        let {langs} = this.props;
        let onChangeEvent = {
            onMouseEnter: () => !show && this.setState({show: true}),
            onMouseLeave: () => show && this.setState({show: false}),
        };
        let curTheme = themeServices.getTheme();

        return (
            <div className={`lgp-wrap ${curTheme}`}
                 {...onChangeEvent}
            >
                <div className={`lp-btn ${show ? "isShow" : ""}`}
                >
                    <i className="fas fa-language"/>
                </div>
                <LanguageFetcher
                    langs={langs}
                    listShape={(list) => show ? (
                        <div className={`language-picker`}>
                            {list.map((lang, i) => (
                                <div className="each-lang"
                                     key={i}
                                >
                                    <div className="lang-part flag">
                                        <img src={lang.flag}/>
                                    </div>
                                    <div className="lang-part name">
                                        {lang.lang}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                />
                <ShowIcon
                    show={show}
                />
            </div>
        );
    }
}
