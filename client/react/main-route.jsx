import React from "react";
import {KappaComponent} from "./common/kappa-component/kappa-component";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {WelcomeRoute} from "./routes/welcome-route/welcome-route";
import {themeServices} from "./services/theme/theme-services";

export class MainRoute extends KappaComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.onUnmount(themeServices.onChange(() => this.forceUpdate()))
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
