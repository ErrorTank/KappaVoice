import React from "react";
import {themeServices} from "../../services/theme/theme-services";
import {ToolTip} from "../tool-tip/tool-tip";

export class LoginInputGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
    };

    renderErrorTooltip = (msg) => (
        <p>{msg}</p>
    );

    render() {
        let {className, placeholder, value, ...rest} = this.props;
        let {focus, showTooltip} = this.state;

        return (
            <div className={`app-input-group ${className}`}>
                <div className={`main ${focus ? "isFocus" : ""}`}>
                    <input {...rest}
                           value={value}
                           onFocus={() => !focus && this.setState({focus: true})}
                           onBlur={() => (focus && !value) && this.setState({focus: false})}
                    />
                    <ToolTip
                        content={this.renderErrorTooltip("sth wrong")}
                    >
                        <div className="error-notify"
                        >
                            <i className="fas fa-exclamation-circle"/>
                        </div>
                    </ToolTip>
                    <p className="placeholder">
                        {placeholder}
                    </p>

                </div>

            </div>
        );
    }
}
