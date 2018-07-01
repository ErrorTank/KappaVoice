import React from "react";
import {KappaComponent} from "./common/kappa-component/kappa-component";
import {Route, Switch, Router} from "react-router-dom"
import {WelcomeRoute} from "./routes/welcome-route/welcome-route";
import {themeServices} from "./services/theme/theme-services";
import {langServices} from "./services/lang/lang";
import {InitTheme} from "./layout/init-theme/init-theme";
import {translatorListener} from "./common/translator-listener/translator-listener";

import {LoginPage} from "./routes/login-route/login-route";
import {NotFoundPage} from "./routes/not-found-page/not-found-page";
import {customHistory} from "./services/history";
import {ToolTipRegistry} from "./common/tool-tip/tool-tip-registry";

export class MainRoute extends KappaComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.onUnmount(themeServices.onChange(() => this.forceUpdate()));
        this.onUnmount(langServices.onChange(() => this.forceUpdate()));
    };

    render() {
        translatorListener.init(langServices.getLang());
        return (
            <InitTheme>
                <div id="main-route">
                    <div className={`init-bg`}>
                        <ToolTipRegistry/>
                        <Router
                            history={customHistory}
                        >
                            <Switch>
                                <Route exact path="/" component={WelcomeRoute}/>
                                <Route exact path="/sign-in" component={LoginPage}/>
                                <Route component={NotFoundPage}/>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </InitTheme>

        );
    }
}
