n = 28;

var isPowerOfThree = function (n) {
  

  let remainder = n % 3;

  while (n > 2) {
    if (remainder !== 0) {
      return false;
    }

    n = n / 3;

    if (n % 3 == 0 && n / 3 == 1) {
      return true;
    }
  }

  return n==1    //最後3/3 =1
};

// var isPowerOfThree = function(n) {
//     let nm = Math.log(n) / Math.log(3)
//     console.log(nm);
//     console.log((Math.floor(nm)));

//     let float = (nm - (Math.floor(nm)))
//     console.log(float)

// };

console.log(isPowerOfThree(n));
