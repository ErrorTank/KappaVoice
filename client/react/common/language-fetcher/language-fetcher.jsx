import React, {Fragment} from "react";
import {langApiList} from "../../../api/common/third-party/languages-api";
import {KappaComponent} from "../kappa-component/kappa-component";


export class LanguageFetcher extends KappaComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.fetchStateData(props.langs).then(list => {
            let onlyFlagAndName = list.map(({flag, languages}) => ({flag, lang: languages[0].nativeName}));
            this.setState({list: onlyFlagAndName});
        })
    };


    fetchStateData = async (langs = []) => {
        let fetchCountriesInfo = langApiList.getByCountries(langs);
        return await fetchCountriesInfo(["flag", "languages"]);
    };

    render() {
        let {listShape} = this.props;
        let {list} = this.state;
        return (
            <Fragment>
                {listShape(list)}
            </Fragment>
        );
    }
}
