const palindromes = function (phrase) {
    let text = phrase.toLowerCase().split("")
        .filter(function(value) {
            if (value === "." || 
                value === "," || 
                value === " " || 
                value === "!") {
                return "";
            } else {
                return value;
            }
        });
    let reversedText = text.toReversed();
    let isPalindrome = true;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== reversedText[i]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
