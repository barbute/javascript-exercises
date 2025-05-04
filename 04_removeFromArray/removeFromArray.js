const removeFromArray = function(list, ...removable) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        let element = list[i];
        let passChecks = true;
        for (let j = 0; j < removable.length; j++) {
            let removableElement = removable[j];
            if (element === removableElement) {
                passChecks = false;
                // Since it fails the vibe check no point
                // in continuing to check so break out of
                // this loop
                break;
            }
        }
        if (passChecks) {
            newList.push(element);
        }
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
