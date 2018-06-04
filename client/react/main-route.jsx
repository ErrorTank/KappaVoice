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
        return (
            <div id="main-route">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={WelcomeRoute} exact/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}