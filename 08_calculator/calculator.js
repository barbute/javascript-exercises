const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(n) {
  /*
   * Can also do n.reduce((tot, curr) => tot + curr, 0);
   */
	let sum = 0;
  n.forEach((x) => {sum += x});
  return sum;
};

const multiply = function(n) {
  /*
   * Can also do n.reduce((prod, curr) => prod * curr);
   */
  let product = 1;
  n.forEach((x, index, array) => {product *= x})
  return product;
};

const power = function(x, y) {
  /*
   * Can also use Math.pow(x, y);
   */
	let result = 1;
  for (let i = 0; i < y; i++) {
    result = result * x;
  }
  return result;
};

const factorial = function(x) {
	let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
