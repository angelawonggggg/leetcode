let x = 101;

// two pointers
var isPalindrome = function (x) {
  let start = 0;
  let end = x.toString().length - 1;

  for (let i = start; i < x.toString().length; i++) {
    while (start <= end) {
      if (x.toString()[start] == x.toString()[end]) {
        start++;
        end--;
      } else {
        return false;
      }
    }
  }

  return true;
};

var isPalindromeMethod1 = function (x) {
  return +x.toString().split("").reverse().join("") == x;
};

console.log(isPalindrome(x));
