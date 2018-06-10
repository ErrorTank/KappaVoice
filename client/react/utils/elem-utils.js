let addStyle = (elem, styleList) => {
    let list = Array.isArray(styleList) ? styleList : [styleList];
    list.forEach(style => {
        let prop = Object.keys(style)[0];
        let val = Object.values(style)[0];
        elem.style[prop] = val;
    })
};
let addClass = (elem, classList) => {
  classList.forEach(cl => elem.className += ` ${cl}`)
}
let replaceClass = (elem, classList) => {
    classList.forEach(cl => elem.className = `${cl}`)
};
export {
    addStyle,
    addClass,
    replaceClass
}
