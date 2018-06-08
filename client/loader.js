import React from "react";
import ReactDOM from "react-dom";
import "./style/main.styl";
import {MainRoute} from "./react/main-route";
import {Theme} from "./react/layout/theme/provider/theme";
import {InitBg} from "./react/layout/init-bg/init-bg";
import {withTheme} from "./react/layout/theme/consumer/theme";
import {allAppThemes} from "./react/layout/theme/all-theme";

const BgWithTheme = withTheme(InitBg);

ReactDOM.render((
        <Theme
            allTheme={allAppThemes}
            active={0}
        >

            <BgWithTheme>
                <MainRoute/>
            </BgWithTheme>
        </Theme>
    )
    , $("#wrapper")[0]
);