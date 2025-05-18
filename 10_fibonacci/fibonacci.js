const fibonacci = function(memberIndex) {
    if (memberIndex < 0) {
        return "OOPS";
    } else if (typeof(memberIndex) === "string") {
        memberIndex = Number.parseInt(memberIndex);
    }
    let sequence = [0, 1];
    let numOne = sequence[0];
    let numTwo = sequence[1];
    for (let i = 2; i <= memberIndex; i++) {
        sequence[i] = numOne + numTwo;
        numOne = numTwo;
        numTwo = sequence[i];
    }
    return sequence[memberIndex];
};

// Do not edit below this line
module.exports = fibonacci;
