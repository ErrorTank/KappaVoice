import React from "react";
import {Logo} from "../../common/logo/logo";

export class WithMainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="with-nav-window">
                <div className="main-nav">
                    <div className="container">
                        <Logo
                            size="md"
                            brandName={true}
                        />
                    </div>
                </div>
                <div className="children-wrap">
                    {this.props.children}
                </div>
            </div>
        );
    }
}