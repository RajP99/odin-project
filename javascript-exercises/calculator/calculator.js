const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	solution = 0;
  for (let i in arr) {
    solution += arr[i];
  }
  return solution;
};

const multiply = function(arr) {
  solution = 1;
  for (let i in arr) {
    solution *= arr[i];
  }
  return solution;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(x) {
  solution = 1;
	for (let i = 1; i <= x; i++) {
    solution *= i;
  }
  return solution;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
