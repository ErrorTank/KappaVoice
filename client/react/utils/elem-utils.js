let addStyle = (elem, styleList) => {
    let list = Array.isArray(styleList) ? styleList : [styleList];
    list.forEach(style => {
        let prop = Object.keys(style)[0];
        let val = Object.values(style)[0];
        elem.style[prop] = val;
    })
};

export {
    addStyle
}