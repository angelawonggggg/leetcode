let num = 3;

var addDigits = function (num) {
  while(num >= 10) {
    let sum = 0;
    ("" + num)
      .split("")
      .forEach((n) => {
        
        sum += parseInt(n);
      });
      num = sum;
  }
  return num;
};



console.log(addDigits(num));


