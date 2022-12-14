let s = "([";
//stack = [')', ']'] -> mark closing brackets in reversed order
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    //console.log(c);

    switch (c) {
      case "(":
        stack.push(")");
        break;

      case "{":
        stack.push("}");
        break;

      case "[":
        stack.push("]");
        break;

      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length == 0;
};

console.log(isValid(s));
