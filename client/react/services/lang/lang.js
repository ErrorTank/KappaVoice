export const allLangs = ["vn", "us"];



let listeners = [];

let curLang = () => localStorage.getItem("lang") || allLangs[0];

let isSupport = (type) => allLangs.includes(type);

export const langServices = {
    getLang: () => curLang(),
    setLang: (type) => {
        if(isSupport(type)){
            localStorage.setItem("lang", type);
            listeners.forEach(fn => fn(curLang()));
        }
    },
    onChange: (func) => {
        listeners.push(func);
        return () => {
            if(!listeners.length) {
                return;
            }
            let i = listeners.indexOf(func);
            if (i === -1) {
                return;
            }
            listeners.splice(i, 1);
        }
    },
};
