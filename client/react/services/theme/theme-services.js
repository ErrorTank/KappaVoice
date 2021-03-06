export const allThemes = ["dark-light", "sky"];

let listeners = [];

let curTheme = () => localStorage.getItem("theme") || allThemes[0];

let isSupport = (type) => allThemes.includes(type);

export const themeServices = {
    getTheme: () => curTheme(),
    setTheme: (type) => {
        if(isSupport(type)){
            localStorage.setItem("theme", type);
            listeners.forEach(fn => fn(curTheme()));
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
