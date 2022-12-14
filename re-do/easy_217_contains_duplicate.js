const number = [-1, 1, -1];
var containsDuplicate = function (number) {
  let map = {};

  for (let i = 0; i < number.length; i++) {
    if (!map[number[i]]) {
      map[number[i]] = 1;
    } else {
      //   map[number[i]]++;
      console.log(map);
      //   if (map[number[i]] >= 2) {
      //     return true;
      //   }
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate(number));
