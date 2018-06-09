import React from "react";
import {themeServices} from "../../../services/theme/theme-services";
import {ThemeBox} from "./theme-box/theme-box";
import {ShowIcon} from "../show-icon/show-icon";


export class ThemePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
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
            <div className={`tp-wrap ${curTheme}`}
                 {...onChangeEvent}
            >
                <div className={`tp-btn ${show ? "isShow" : ""}`}
                >
                    <ThemeBox
                        theme={curTheme}
                        size={"sm"}
                    />
                </div>
                <ShowIcon
                    show={show}
                />
            </div>
        );
    }
}
