const reverseString = function(string) {
    let temp = [];
    for (i = string.length-1; i >= 0; i--){
        temp.push(string.charAt(i));
    }
    return temp.join('');

};

module.exports = reverseString;
