import React from "react";
import {InitTitleLayout} from "../../layout/init-title-layout";
import {WithMainNav} from "../../layout/with-main-nav/with-main-nav";

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
                <WithMainNav>
                    dasdas
                </WithMainNav>
            </InitTitleLayout>
        );
    }
}