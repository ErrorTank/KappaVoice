import React from "react";

import {themeContext} from "../context";

const {ThemeProvider} = themeContext;

export class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.allTheme[props.active]
        };

    };

    setTheme = (type = "dark-light") => {
        type = this.props.allTheme.find(theme => type === theme) || "dark-light";
        this.setState({type});
    };

    render() {
        let {type} = this.state;
        let {children} = this.props;
        const themeConfig = {
            themeType: type,
            themeUtils: {
                setTheme: this.setTheme
            }
        };
        return (
            <ThemeProvider value={themeConfig}>
                {children}
            </ThemeProvider>
        )
    }
}