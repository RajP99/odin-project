const ftoc = function(temp) {
  let x = (temp - 32) * 5/9;
   if (Number.isInteger(x)) {
    return x;
   } else {
     return helper(x);
   }
};

const ctof = function(temp) {
  let x = (temp * (9/5) + 32);
  if (Number.isInteger(x)) {
    return x;
   } else {
     return helper(x);
   }
};

function helper(temp){
  return (Math.round(temp * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
};
