import React from "react";
import {InitTitleLayout} from "../../layout/init-title-layout";
import {translatorListener} from "../../common/translator-listener/translator-listener";
import {Logo} from "../../common/logo/logo";
import {themeServices} from "../../services/theme/theme-services";
import {customHistory} from "../../services/history";

export class NotFoundPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let translateField = translatorListener.translator(
            [{
                name: "title",
                lang: {
                    us: "KappaVoice - 404 Not Found",
                    vn: "KappaVoice - 404 Không tìm thấy trang"
                }
            }, {
                name: "des",
                lang: {
                    us: "You seem to be lost! Here're some suggestions",
                    vn: "Có vẻ bạn bị lạc! Hãy xem một vài gợi ý dưới đây"
                }
            }]
        );

        let curTheme = themeServices.getTheme();
        let logoImg = {
            "dark-light": "white",
            "sky": "black"
        };
        return(
            <InitTitleLayout
                title={translateField("title")}
            >
                <div className={`not-found-page ${curTheme}`}>
                    <div className="huge-log-bg">
                        <img src={`./assets/img/creepy-ghost-${logoImg[curTheme]}.svg`}/>
                    </div>
                    <div className="page-wrapper">
                        <div className="page-header">
                            <Logo
                                className={`app-logo logo-${curTheme}`}
                                src={`./assets/img/creepy-ghost-${logoImg[curTheme]}.svg`}
                                brandName="KappaVoice"
                            />
                        </div>
                        <div className="page-body">
                            <h1>404</h1>
                            <p className="description">
                                {translateField("des")}
                            </p>
                        </div>
                        <div className="page-footer">
                            <button className="btn nav-btn"
                                    onClick={()=> customHistory.push("/sign-in")}
                            >
                                Sign In
                            </button>
                            <button className="btn nav-btn"
                                    onClick={()=> customHistory.push("/sign-up")}
                            >
                                Sign Up
                            </button>
                            <button className="btn nav-btn"
                                    onClick={()=> customHistory.push("/")}
                            >
                                Home Page
                            </button>
                        </div>
                    </div>

                </div>
            </InitTitleLayout>
        );
    }
}
