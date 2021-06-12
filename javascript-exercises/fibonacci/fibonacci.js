const fibonacci = function(x) {
    if (x < 1) {
        return "OOPS";
    }
    let prev = 1;
    solution = 1;
    for (let i = x; i > 2; i--) {
        let temp = solution;
        solution += prev;
        prev = temp;
    }
    return solution;
};

module.exports = fibonacci;
