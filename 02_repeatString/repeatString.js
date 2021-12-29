const repeatString = function(text, times) {
    if (times < 0){
        return `ERROR`;
    }
    let finalText = ``;
    for (let i = 0; i < times; i++){
        finalText += text;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
