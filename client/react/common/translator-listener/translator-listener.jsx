import {createTranslator} from "../../utils/translator/translator";

let tool = null;

export const translatorListener = {
    init: curLang => tool = createTranslator(curLang),
    translator: (config) => tool(config)
};


