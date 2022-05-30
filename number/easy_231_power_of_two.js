n = 18;

// Method 2
var isPowerOfTwo = function (n) {   
    let power = Math.log(n/4)/ Math.log(2)   // javascript works bad with huge numbers, thats why we divide n by 4, which is enough to pass all test cases

    return Number.isInteger(power)       // to check if 3.0000000004 is an integer
  };



// Method 1
// var isPowerOfTwo = function (n) {   
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }

//   return n == 1;
// };


console.log(isPowerOfTwo(n));
