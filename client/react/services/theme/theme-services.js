export const allThemes = ["dark-light", "sky"];

let curTheme = allThemes[0];
let listeners = [];

let isSupport = (type) => allThemes.includes(type);

export const themeServices = {
    getTheme: () => curTheme,
    setTheme: (type) => {
        if(isSupport(type)){
            curTheme = type;
            listeners.forEach(fn => fn(curTheme));
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
