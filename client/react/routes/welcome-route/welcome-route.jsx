import React from "react";
import {InitTitleLayout} from "../../layout/init-title-layout";
import {WithMainNav} from "../../layout/with-main-nav/with-main-nav";
import {WelcomeBoard} from "./welcome-board/welcome-board";
import {langServices} from "../../services/lang/lang";
import {translator} from "../../utils/translator";
import {MovingFigure} from "../../common/moving-figure/moving-figure";
import {themeServices} from "../../services/theme/theme-services";

let initLang = translator([
    {
        name: "title",
        lang: {
            us: "Welcome to KappaVoice",
            vn: "Chào mừng đến với KappaVoice"
        }
    }
]);

export class WelcomeRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    };

    render() {
        let curLang = langServices.getLang();
        let translateField = initLang(curLang);
        let curTheme = themeServices.getTheme();
        return (

            <div className="welcome-route">
                <MovingFigure
                    renderFigure={() => (
                        <img
                            className="moving-ghost"
                            src={`assets/img/creepy-ghost-bg-${curTheme}.svg`}
                        />
                    )}
                >
                    <InitTitleLayout
                        title={translateField("title")}
                    >
                        <div className={`welcome-route-content  ${curTheme}`}>
                            <WithMainNav>
                                <WelcomeBoard/>
                            </WithMainNav>
                        </div>


                    </InitTitleLayout>


                </MovingFigure>
            </div>



        );
    }
}
