s = "race a car";

// two pointers
var isPalindrome = function (s) {
  let alphabets = s.toLowerCase().replace(/[^a-z0-9]+/gim, "");
  console.log(alphabets);
  let start = 0;
  let end = alphabets.length - 1;
  if (alphabets.length <= 1) return true; // length = 1 is also palindrome

  while (start < end) {
    for (let i = start; i < alphabets.length; i++) {
      if (alphabets[i] !== alphabets[end]) return console.log(false);
      start++;
      end--;
    }

    return console.log(true);
  }
};

// method: regex + .split + .reverse
// var isPalindrome = function (s) {
//   let alphabets = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase(); // string.trim() does not work because it is not removing the white space between words

//   if (!alphabets.length) return true;
//   let reversed = alphabets.split("").reverse().join(""); //.split.reverse.join() altogether is slower than one for loop
//   if (alphabets === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// };

isPalindrome(s);
