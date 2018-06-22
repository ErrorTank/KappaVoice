const debounce = (fn, delay) => {
    let action;
    return function () {
        clearTimeout(action);
        action = setTimeout(() => {
            fn.apply(null, arguments)
        }, delay)
    }
};

export {
    debounce
}
