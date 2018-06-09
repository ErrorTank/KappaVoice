import React from "react";
import ReactDOM from "react-dom";
import "./style/main.styl";
import {MainRoute} from "./react/main-route";
import {InitTheme} from "./react/layout/init-theme/init-theme";


ReactDOM.render((
    <InitTheme

    >
        <MainRoute/>
    </InitTheme>
    ), $("#wrapper")[0]
);
