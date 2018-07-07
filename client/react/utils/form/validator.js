let removeUndefined = fn => (val) => {
    if (val === undefined)
        return false;
    return fn(val);
};
let initName = (fn, name) => val => ({
    name,
    check: fn(val)
});
let isEmail = removeUndefined(val => val.match(/^(.+)@(\w){2,8}\.(\w){2,5}(\.(\w){2,5})*/gi));
let isUsername = removeUndefined(val => !val.match(/\W/gi));
let isPassword = removeUndefined(val => !val.match(/\W/gi));
let lengthRange = ({min, max}) => removeUndefined(val => val.length <= max && val.length >= min);
let notContain = str => {
    if(!str){
        return () => true;
    }
    return removeUndefined(val => val.indexOf(str) === -1);
};
let isContain = str => removeUndefined(val => val.indexOf(str) !== -1);
let isMatched = str => {
    if(!str)
        return () => true;
    return removeUndefined(val => val === str);
};
let notEmpty = removeUndefined(val => val !== "");

export const validators = {
    isEmail: initName(isEmail, "Invalid email"),
    isUsername: initName(isUsername, "Invalid username"),
    isPassword: initName(isPassword, "Invalid password"),
    lengthRange: range => initName(lengthRange(range), `Length must be greater than ${range.min} and smaller than ${range.max}`),
    passNotContainUsername: str => initName(notContain(str), `Your password cannot contain username`),
    passMatched: str => initName(isMatched(str), "Password is not matched"),
    notEmpty: initName(notEmpty, "This field cannot be empty")
};
