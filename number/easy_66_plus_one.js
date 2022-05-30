let digits = [9, 9, 9, 9, 9];

var plusOne = function (digits) {
   let carry = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + carry;

    if (i == digits.length - 1) {
      digits[i] = digits[i] + 1;
    }

    if (digits[i] == 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry == 1) {
    digits.unshift(carry);
  }
  return digits;
};

console.log(plusOne(digits));

// https://www.geeksforgeeks.org/how-to-convert-a-number-into-array-in-javascript/
// 以下呢種做法係處理唔到很大的integer，所以唔應該將digits變成integer再計數
// var plusOne = function(digits) {
//     let sum = 0
//     for(let i=0; i<digits.length; i++) {
//         index =  digits.length - (i+1)
//         sum += digits[i] * (10 ** index)
//     }
//     let total = sum + 1

//     let result = total.toString().split("").map((num) => {   // String(total) -> turns total into string data type
//         return Number(num)
//     })
//     return result
// }
