import React, {Fragment} from "react";
import {Logo} from "../../common/logo/logo";
import {LanguagePicker} from "../../common/language-picker/language-picker";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export class WithMainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLP: false
        };
    };

    render() {
        let {showLP} = this.state;
        let eventHandle = {
            onMouseEnter: () => !showLP && this.setState({showLP: true}),
            onMouseLeave: () => showLP && this.setState({showLP: false}),
        };
        let showingIcon = showLP ? <i className="fas fa-sort-up"/> : <i className="fas fa-sort-down"/>;
        return (
            <div className="with-nav-window">
                <div className="main-nav">
                    <div className="container">
                        <div className="flex-wrapper">
                            <Logo
                                size="md"
                                brandName={true}
                            />
                            <div className="flex-wrapper right-side">
                                <div className="login-btn">
                                    <button>
                                        Login
                                    </button>
                                </div>
                                <div className="separate"/>
                                <div className="lgp-wrap">
                                    <LanguagePicker
                                        btnShape={LanguagePickerBtn(eventHandle, showLP)}
                                        isOpen={showLP}
                                        langs={["vn", "us"]}
                                    />
                                </div>
                                <TransitionGroup
                                    className="show-icon"
                                >
                                    <CSSTransition
                                        key={showLP}
                                        timeout={200}
                                        classNames="icon"
                                    >
                                            <span className={`icon ${showLP ? "isShow" : "isHide"} `}>
                                                {showingIcon}
                                            </span>

                                    </CSSTransition>
                                </TransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="children-wrap">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const LanguagePickerBtn = (eventHandle, isShow) => (
    <div className={`lp-btn ${isShow ? "isShow" : ""}`}
         {...eventHandle}
    >
        <i className="fas fa-language"/>
    </div>
);
