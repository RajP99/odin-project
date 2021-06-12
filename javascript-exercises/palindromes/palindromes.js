const palindromes = function (x) {
    let i = 0;
    let j = x.length-1;
    while (i <= j) {
        if (!isLetter(x[i])) {
            i++;
        } else if (!isLetter(x[j])) {
            j--;
        } else {
            if (x[i].toLowerCase() != x[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
};

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

module.exports = palindromes;
