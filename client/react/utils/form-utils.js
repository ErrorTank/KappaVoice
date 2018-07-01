let createFrom = (formValue) => {

    return {
        getInvalidPaths: (validators) => {

            let inValidPaths = [];

            for (let validatorKey in validators) {
                let formPathValue = formValue[validatorKey];
                let validatesFunc = validators[validatorKey];

                for (let validFunc of validatesFunc) {
                    if (validFunc(formPathValue)) {
                        inValidPaths.push(validatorKey)
                        break;
                    }
                }
            }

            return inValidPaths
        },
        parseError :invalidPaths => (type, root = false) => {
            root = root || invalidPaths;
            let arr = type;
            if (typeof arr === "string") {
                return !!root.includes(arr);
            }
            return arr.reduce((total, cur) => {
                return !!total || !!root.includes(cur);
            }, false);
        }
    }
};

export {
    createFrom
}
