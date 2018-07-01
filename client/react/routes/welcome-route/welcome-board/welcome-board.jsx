import React from "react";
import {WelcomeActions} from "./welcome-actions/welcome-actions";
import {themeServices} from "../../../services/theme/theme-services";
import {translatorListener} from "../../../common/translator-listener/translator-listener";
import {langServices} from "../../../services/lang/lang";



export class WelcomeBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        let translateField = translatorListener.translator([
            {
                name: "big-title",
                lang: {
                    us: "It's time to ditch Discord and In-game Voice Chat.",
                    vn: "Đã đến lúc ngừng sử dụng Discord và hệ thống Voice Chat trong trò chơi"
                }
            },{
                name: "sub-title",
                lang: {
                    us: "All-in-one voice and text chat for gamers that's free, secure, and works on your browser.",
                    vn: "Một ứng dụng tất cả trong một gồm text và voice chat hoàn toàn miễn phí, bảo mật và hoạt động trên trình duyệt của bạn"
                }
            }, {
                name: "open-app",
                lang: {
                    us: "Open KappaVoice in your browser",
                    vn: "Mở KappaVoice trên trình duyệt ngay"
                }
            }, {
                name: "placeholder",
                lang: {
                    us: "Enter an username",
                    vn: "Nhập một tên"
                }
            }
        ]);
        let curTheme = themeServices.getTheme();
        return(
            <div className={`welcome-board ${curTheme}`}>
                <h1 className="big-title text-center">
                    {translateField("big-title")}
                </h1>
                <p className="title-sub text-center">
                    {translateField("sub-title")}
                </p>
                <WelcomeActions
                    btnText={translateField("open-app")}
                    inputPlaceholder={translateField("placeholder")}
                />

            </div>

        );
    }
}
