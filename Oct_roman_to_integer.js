let s = "MCMXCIV";

var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  let str = s.split("");

  //如果str[i]細過之後s i+1 value，就減去

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] < map[str[i + 1]]) {
      sum -= map[str[i]];
    } else {
      sum += map[str[i]];
    }
  }
  return sum;
};

var romanToIntMethod1 = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    switch (true) {
      case s[i] == "I" && s[i + 1] == "V":
        number = "IV";
        i = i + 2;
        break;

      case s[i] == "I" && s[i + 1] == "X":
        number = "IX";
        i = i + 1;
        break;

      case s[i] == "X" && s[i + 1] == "L":
        number = "XL";
        i = i + 1;
        break;

      case s[i] == "X" && s[i + 1] == "C":
        number = "XC";
        i = i + 1;
        break;

      case s[i] == "C" && s[i + 1] == "D":
        number = "CD";
        i = i + 1;
        break;

      case s[i] == "C" && s[i + 1] == "M":
        number = "CM";
        i = i + 1;
        break;

      default:
        number = s[i];
        break;
    }
    console.log(number);

    sum += map[number];
  }

  return sum;
};

console.log(romanToInt(s));
