const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    } else if (x < 0 || y < 0) {
        return "ERROR";
    }
    let sum = 0;
    let lowerBound = Math.min(x, y);
    let upperBound = Math.max(x, y);
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
