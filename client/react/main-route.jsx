import React from "react";
import {KappaComponent} from "./common/kappa-component/kappa-component";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {WelcomeRoute} from "./routes/welcome-route/welcome-route";
import {themeServices} from "./services/theme/theme-services";
import {langServices} from "./services/lang/lang";
import {InitTheme} from "./layout/init-theme/init-theme";

export class MainRoute extends KappaComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.onUnmount(themeServices.onChange(() => this.forceUpdate()))
        this.onUnmount(langServices.onChange(() => this.forceUpdate()))
    };

    render() {
        return (
            <InitTheme

            >
                <div id="main-route">
                    <div className={`init-bg`}>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" component={WelcomeRoute} exact/>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </InitTheme>

        );
    }
}
