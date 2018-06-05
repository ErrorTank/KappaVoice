import React from "react";
import {KappaComponent} from "./common/kappa-component/kappa-component";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {WelcomeRoute} from "./routes/welcome-route/welcome-route";

export class MainRoute extends KappaComponent {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        let {themeType} = this.props;
        return (
            <div id="main-route">
                <div className={`init-bg bg-${themeType}`}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={WelcomeRoute} exact/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}