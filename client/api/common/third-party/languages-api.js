import {apiFactory} from "../../api-factory/apiFactory";

const langApi = apiFactory.createApi({
    hostURL: "https://restcountries.eu/rest/v2",
    headers: [
        {
            key: "Content-Type",
            content: "application/x-www-form-urlencoded; charset=UTF-8"
        }
    ]
});

const createLangStr = list => list.reduce((total, cur, i) => total + `${i === 0 ? "" : ";"}${cur}`, "");

export const langApiList = {
    getByCountries: (codes = []) => async (fields = []) => {
        let fieldStr = createLangStr(fields);
        let codeStr = createLangStr(codes);
        return await langApi.get(`/alpha?codes=${codeStr}&fields=${fieldStr}`);
    },
    getByLangs: (langs = []) => async (fields = []) => {
        let fieldStr = createLangStr(fields);
        let getOneLang = async (lang) => langApi.get(`/lang/${lang}&fields=${fieldStr}`);
        return await Promise.all(langs.map(lang => getOneLang(lang)));
    },
};
