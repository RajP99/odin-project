const removeFromArray = function(arr, n) {
    let args = Array.from(arguments);
    for (let i = 1; i < args.length; i++){
        let temp = args[i];
        let index = arr.indexOf(temp);
        if (index < 0){
            continue;
        }
        arr.splice(index, 1);
    }
    return arr;
};

module.exports = removeFromArray;
