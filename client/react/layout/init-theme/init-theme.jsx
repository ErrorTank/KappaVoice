import React from "react";
import {getElemByTag} from "../../utils/dom-utils";
import {addClass} from "../../utils/elem-utils";
import {KappaComponent} from "../../common/kappa-component/kappa-component";
import {themeServices} from "../../services/theme/theme-services";

export class InitTheme extends KappaComponent {
    constructor(props) {
        super(props);

        this.onUnmount(themeServices.onChange(() => this.forceUpdate()))

    };

    render() {
        ["html", "body"].forEach(tag => {
            addClass(getElemByTag(tag), [themeServices.getTheme()]);
        });

        return this.props.children;
    }
}
