import React from "react";

import {themeContext} from "../context";

const {ThemeConsumer} = themeContext;

export const withTheme = Comp =>
    class extends React.Component {
        constructor(props) {
            super(props);
        };

        render() {
            return (
                <ThemeConsumer>
                    {utils => (
                        <Comp
                            {...this.props}
                            {...utils}
                        />
                    )}
                </ThemeConsumer>
            );
        }
    };