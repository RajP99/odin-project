const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR';
    }
    
    solution = "";
    for (let i = 0; i < n; i++){
        solution += string;
    }
    return solution
};

module.exports = repeatString;
