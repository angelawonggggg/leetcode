let n = 999;
//aA = 65
var convertToTitle = function (n) {
  if (n - 1 < 26) {
    return String.fromCharCode(65 + ((n - 1) % 26));
  }

  var result = "";

  while (n > 0) {
    var codeNum = (n - 1) % 26;
    console.log("codeNum", codeNum);
    var c = String.fromCharCode(codeNum + 65);
    console.log("c", c);
    result = c + result;

    n = parseInt((n - 1) / 26);
    console.log(n);
  }
  return result;
};

console.log(convertToTitle(n));
