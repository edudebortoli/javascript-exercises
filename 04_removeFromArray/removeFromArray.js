const removeFromArray = function() {
    let newArray = [];
    
    nextNumber:
    for (arraySeq = 0; arraySeq < arguments[0].length; arraySeq++){

        for (let unwanted = 1; unwanted < arguments.length; unwanted++){

            if (arguments[0][arraySeq] === arguments[unwanted]){
                alert(`${arguments[0][arraySeq]} igual a ${arguments[unwanted]}`);
                continue nextNumber;
            }
        }
    newArray.push(arguments[0][arraySeq]);
    console.log(newArray);

    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
