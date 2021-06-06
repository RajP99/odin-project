const sumAll = function(x, y) {
    if ((x < 0) || (y < 0) || (typeof x != "number") || (typeof y != "number")){
        return "ERROR";
    }
    
    let solution = 0;
    start = Math.min(x,y);
    end = 1 + Math.max(x,y);

    for (let i = start; i < end; i++){
        solution += i;
    }
    return solution;

};

module.exports = sumAll;
