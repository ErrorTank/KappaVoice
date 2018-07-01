import React from "react";
import {InitTitleLayout} from "../../layout/init-title-layout";
import {translatorListener} from "../../common/translator-listener/translator-listener";

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
            }]
        );
        return(
            <InitTitleLayout
                title={translateField("title")}
            >
                <div className="not-found-page">
                </div>
            </InitTitleLayout>
        );
    }
}
