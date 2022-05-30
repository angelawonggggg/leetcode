n = 19;

// How to determine an infinite loop is coming
var isHappy = function (n) {
  let store = {};

  // 如果map裡面出現過這個數字 或 數字 = 1，停止迴圈。
  while (!store[n] && n != 1) {
    store[n] = n;

    (n + "").split("").forEach((v, i) => {
      //唔洗下下用for loop去做，可以考慮下forEach得唔得
      if (i == 0) n = 0; // beginning of a new loop 如果冇咗呢句n就會瘋狂accumulate上去
      //   console.log(i)
      n += v * v;
    });
  }
  return n == 1;
};

// Same method but easier to understand

// var isHappy = function (n) {
//   let store = {};

//   // 如果map裡面出現過這個數字 或 數字 = 1，停止迴圈。
//   while (!store[n] && n != 1) {
//     store[n] = n;

//     let new_n = 0;
//     (n + "")
//       .split("")
//       .forEach((v) => {
//         //唔洗下下用for loop去做，可以考慮下forEach得唔得
//         // if (i == 0) n = 0; // beginning of a new loop 如果冇咗呢句n就會瘋狂accumulate上去
//         //   console.log(i)
//         new_n += v * v;
//       });
//       n = parseInt(new_n)
//   }
//   return n == 1;
// };
console.log(isHappy(n));