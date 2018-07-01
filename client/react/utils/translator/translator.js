export const createTranslator = (curLang) => {
    return configList => {
        let wordObj = configList.reduce((total, cur)=>{
            let {name, lang} = cur;
            return {...total, [name]: lang[curLang]}
        }, {});
        return field => wordObj[field]
    };
};

