// 1. take the first string and split it into an array
// 2. check if the first char exists in the remaining strings
// split完已經係array 唔洗再push入array

// need to pay attention when strs = ["a"], with only one input
// array.slice().join() to check the prefix part

var longestCommonPrefix = function (strs) {
  let splitFirstString = strs[0].split("");

  let array = [];

  for (let l = 0; l < splitFirstString.length; l++) {
    let prefixCheck = [];

    for (let i = 1; i < strs.length; i++) {
      let splitRemainingStrings = strs[i].split("");

      if (
        splitRemainingStrings[l] == splitFirstString[l] &&
        splitRemainingStrings.slice(0, l).join("") ==
          splitFirstString.slice(0, l).join("")
      ) {
        prefixCheck.push(splitRemainingStrings[l]);
      }
    }

    if (prefixCheck.length == strs.length - 1) {
      array.push(prefixCheck[0]);
    }
  }

  let longestCommonPrefix = array.join("");

  if (strs.length == 1) {
    longestCommonPrefix = strs[0];
  }

  return longestCommonPrefix;
};

console.log(longestCommonPrefix(["cir", "car"]));

// Better code

var longestCommonPrefix = function (strs) {
  // Declare prefix as empty string
  let prefix = "";
  // Loop through every text in the array
  for (let i = 0; i < strs[0].length; i++) {
    // If all items have similar *i-th* element, add that element to prefix, else return the prefix at that point
    if (strs.every((a) => a[i] === strs[0].charAt(i))) {
      prefix += strs[0].charAt(i);
    } else {
      return prefix;
    }
  }
  return prefix;
};
