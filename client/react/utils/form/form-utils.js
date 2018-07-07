let createFrom = (formValue) => {

    return {
        getInvalidPaths: (validators) => {

            let inValidPaths = [];

            for (let validatorKey in validators) {
                let formPathValue = formValue[validatorKey];
                let validatesFunc = validators[validatorKey];

                for (let validFunc of validatesFunc) {
                    let result = validFunc(formPathValue);
                    if (!result.check) {
                        inValidPaths.push({
                            key: validatorKey,
                            name: result.name
                        });
                        break;
                    }
                }
            }

            return inValidPaths
        },

    }
};
let parseError = invalidPaths => (type, root = false) => {
        root = root || invalidPaths;
        let arr = type;
        if (typeof arr === "string") {
            return !!root.includes(arr);
        }
        return arr.reduce((total, cur) => {
            return !!total || !!root.includes(cur);
        }, false);
    };


let getError = (invalidPaths) => key => invalidPaths.find(error => error.key === key);
export {
    createFrom,
    getError
}
