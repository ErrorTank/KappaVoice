import React from "react";
import {themeServices} from "../../../services/theme/theme-services";
import {ThemeBox} from "./theme-box/theme-box";
import {ShowIcon} from "../show-icon/show-icon";
import {AutoComplete} from "../../../common/autocomplete/autocomplete";

const displayThemeName = {
  "dark-light": "Dark Light",
  "sky": "Sky Blue"
};


export class ThemePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    };

    handlePick = (theme) => {
        this.setState({show: false});
        themeServices.setTheme(theme)
    };

    render() {
        let {show} = this.state;
        let {themes} = this.props;
        let onChangeEvent = {
            onMouseEnter: () => !show && this.setState({show: true}),
            onMouseLeave: () => show && this.setState({show: false}),
        };
        let curTheme = themeServices.getTheme();
        return (
            <div className={`tp-wrap ${curTheme} picker-wrap`}
                 {...onChangeEvent}
            >
                <div className={`tp-btn ${show ? "isShow" : ""} picker-toggle`}
                >
                    <ThemeBox
                        theme={curTheme}
                        size={"sm"}
                    />
                </div>
                {show && (
                    <AutoComplete
                        list={themes}
                        className="picker-list themes-list"
                        render={(theme) => (
                            <div className={`theme picker-item ${curTheme === theme ? "active" : ""}`}
                                 onClick={() => this.handlePick(theme)}
                            >
                                <span className="box">
                                    <ThemeBox
                                        theme={theme}
                                        size="sm"
                                    />
                                </span>
                                <span className="name">
                                    {displayThemeName[theme]}
                                </span>
                            </div>
                        )}
                    />
                )

                }
                <ShowIcon
                    show={show}
                />
            </div>
        );
    }
}
