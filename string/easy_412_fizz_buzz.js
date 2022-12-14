let n = 5;

var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let newIdx = i + 1;
    switch (true) {
      case newIdx % 3 == 0 && newIdx % 5 == 0:
        answer[i] = "FizzBuzz";
        break;
      case newIdx % 3 == 0:
        answer[i] = "Fizz";
        break;
      case newIdx % 5 == 0:
        answer[i] = "Buzz";
        break;
      default:
        answer[i] = newIdx.toString();
        break;
    }
  }

  return answer;
};

console.log(fizzBuzz(n));
