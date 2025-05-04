const reverseString = function(phrase) {
    let phraseArray = [];
    let reveresedPhraseArray = [];
    let reversedPhrase = "";
    for (let i = 0; i < phrase.length; i++) {
        phraseArray[i] = phrase.at(i);
    }
    for (let j = 0; j < phraseArray.length; j++) {
        // Must subtract one since j starts at 0, thus if we try to subtract
        // by j once it will go out of bounds trying to find the character
        reveresedPhraseArray[j] = phraseArray[(phraseArray.length - 1) - j];
    }
    for (let h = 0; h < reveresedPhraseArray.length; h++) {
        reversedPhrase += reveresedPhraseArray[h];
    }
    return reversedPhrase;
};

// Do not edit below this line
module.exports = reverseString;
