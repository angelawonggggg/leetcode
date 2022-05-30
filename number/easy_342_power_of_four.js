let n = 15;

// Method 1
var isPowerOfFour = function(n) {
    let power = Math.log(n) / Math.log(4)

    return Number.isInteger(power)

};


// Method 2
var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }
  if(n == 1) {return true}
  let remainder = n % 4;

  while (n > 3) {
    if (remainder != 0) {
      return false;
    }
    n = n / 4;

    if (n % 4 == 0 && n / 4 == 1) {
      return true;
    }
    return n == 1;
  }
};

console.log(isPowerOfFour(n));
