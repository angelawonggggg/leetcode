let a = 25;
let b = 30;
var commonFactors = function (a, b) {
  let map1 = [];
  let map2 = [];
  for (let i = 1; i <= a; i++) {
    a % i == 0 ? map1.push(i) : null;
  }

  for (let i = 0; i <= map1.length; i++) {
    b % map1[i] == 0 ? map2.push(i) : null;
  }

  return map2.length;
};

console.log(commonFactors(a, b));
