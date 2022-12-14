let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  let newS = s.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
  let start = 0;
  let end = newS.length - 1;

  for (let i = 0; i < newS.length; i++) {
    if (newS[start] == newS[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(s));
