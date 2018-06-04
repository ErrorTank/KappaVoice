import React from "react";
import {InitTitleLayout} from "../../layout/init-title-layout";

export class WelcomeRoute extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    render(){
        return(
            <InitTitleLayout
                title="Welcome to KappaVoice"
            >
            </InitTitleLayout>
        );
    }
}