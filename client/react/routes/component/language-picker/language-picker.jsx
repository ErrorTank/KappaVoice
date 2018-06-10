import React from "react";
import {LanguageFetcher} from "../../../common/language-fetcher/language-fetcher";
import {themeServices} from "../../../services/theme/theme-services";
import {ShowIcon} from "../show-icon/show-icon";
import {AutoComplete} from "../../../common/autocomplete/autocomplete";



export class LanguagePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false
        };
    };

    handlePick = lang => {
        this.setState({show: false});
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
            <div className={`lgp-wrap ${curTheme} picker-wrap`}
                 {...onChangeEvent}
            >
                <div className={`lgp-btn ${show ? "isShow" : ""} picker-toggle`}
                >
                    <i className="fas fa-language"/>
                </div>
                <LanguageFetcher
                    langs={langs}
                    render={(list) => show ? (
                        <AutoComplete
                            list={list}
                            className="language-picker picker-list"
                            render={lang => (
                                <div className="each-lang picker-item"
                                     onClick={() => this.handlePick(lang)}
                                >
                                    <div className="lang-part flag">
                                        <img src={lang.flag}/>
                                    </div>
                                    <div className="lang-part name">
                                        {lang.lang}
                                    </div>
                                </div>
                            )}
                        />
                    ) : null}
                />
                <ShowIcon
                    show={show}
                />
            </div>
        );
    }
}
