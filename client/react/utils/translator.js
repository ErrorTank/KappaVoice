export let translator = configList => curLang =>{
    let wordObj = configList.reduce((total, cur)=>{
        let {name, lang} = cur;
        console.log(lang)
        return {...total, [name]: lang[curLang]}
    }, {});
    return field => wordObj[field]
};
