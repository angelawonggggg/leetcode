let columnTitle = "AB";


// 26進制
var titleToNumber = function (n) {
  var sum = 0;
  var exp = 0;

  for (let i = n.length - 1; i >= 0; i--) {
    let value = n.charCodeAt(i) - 64;
    // console.log(output)

    value = value * Math.pow(26, exp++);
    sum += value;
  }
  return sum;
};

console.log(titleToNumber(columnTitle));
