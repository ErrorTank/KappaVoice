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


    render() {
        let {className, placeholder, value, renderErrorTooltip, ...rest} = this.props;
        let {focus} = this.state;

        return (
            <div className={`app-input-group ${className}`}>
                <div className={`main ${(focus || renderErrorTooltip) ? "isFocus" : ""} ${renderErrorTooltip ? "isError" : ""}`}>
                    <input {...rest}
                           value={value}
                           onFocus={() => !focus && this.setState({focus: true})}
                           onBlur={() => (focus && !value) && this.setState({focus: false})}
                    />
                    {renderErrorTooltip && (
                        <ToolTip
                            content={renderErrorTooltip}
                        >
                            <div className="error-notify"
                            >
                                <i className="fas fa-exclamation-circle"/>
                            </div>
                        </ToolTip>
                    )

                    }

                    <p className="placeholder no-pointer-event">
                        {placeholder}
                    </p>

                </div>

            </div>
        );
    }
}
