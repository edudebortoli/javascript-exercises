const sumAll = function(a,b) {
    let totalSum = 0;

    if (typeof a != Number || a < 0 || typeof b != Number || b < 0){
        return "ERROR!";
    } else if (a < b){
        for (let i = a; i <= b; i++){
            totalSum += i;
        }
    } else if (b < a){
        for (let i = b; i <=a; i++){
            totalSum += i;
        }
        return totalSum;
    }

};

// Do not edit below this line
module.exports = sumAll;
