import React from "react";
import {InitTitleLayout} from "../../layout/init-title-layout";
import {WithMainNav} from "../../layout/with-main-nav/with-main-nav";
import {WelcomeBoard} from "./welcome-board/welcome-board";
import {langServices} from "../../services/lang/lang";
import {MovingFigure} from "../../common/moving-figure/moving-figure";
import {themeServices} from "../../services/theme/theme-services";
import {translatorListener} from "../../common/translator-listener/translator-listener";


export class WelcomeRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    };

    render() {
        let translateField = translatorListener.translator([
            {
                name: "title",
                lang: {
                    us: "Welcome to KappaVoice",
                    vn: "Chào mừng đến với KappaVoice"
                }
            }
        ]);
        let curTheme = themeServices.getTheme();
        let logoImg = {
            "dark-light": "white",
            "sky": "black"
        };
        return (
            <InitTitleLayout
                title={translateField("title")}
            >
                <div className="welcome-route">
                    <MovingFigure
                        renderFigure={() => (
                            <img
                                className="moving-ghost"
                                src={`assets/img/creepy-ghost-bg-${logoImg[curTheme]}.svg`}
                            />
                        )}
                        className="wrapper"
                    >
                        <div className={` ${curTheme} hide-figure`}>
                            <WithMainNav>

                                <div className={`welcome-route-content `}>
                                    <WelcomeBoard/>
                                </div>
                            </WithMainNav>
                        </div>


                    </MovingFigure>


                </div>
            </InitTitleLayout>

        );
    }
}
