let s = "abaccb";
let distance = [
  1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

var checkDistances = function (s, distanceArray) {
  for (let i = 0; i < s.length; i++) {
    let firstIndex = s.indexOf(s[i]);
    let lastIndex = s.lastIndexOf(s[i]);
    let distance = lastIndex - (firstIndex + 1);

    let correspondingIndexInArray = s.charCodeAt(i) - 97;

    if (distanceArray[correspondingIndexInArray] !== distance) {
      return false;
    }
  }
  return true;
};

console.log(checkDistances(s, distance));
