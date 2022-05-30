var romanToInt = function (s) {
  const romanValue = new Map();
  romanValue.set("I", 1)
  romanValue.set("V", 5);
  romanValue.set("X", 10);
  romanValue.set("L", 50);
  romanValue.set("C", 100);
  romanValue.set("D", 500);
  romanValue.set("M", 1000);


  let ans = 0;
  let romanArray = s.split("")

  

  for (let i = 0; i < romanArray.length; i++) {
    let value = romanValue.get(romanArray[i]);
    if(i<romanArray.length-1 && value<romanValue.get(s[i+1])) {
        ans -= value;
    } else {
        ans += value;
    }
  }

  return ans
};

console.log(romanToInt("IX"));

