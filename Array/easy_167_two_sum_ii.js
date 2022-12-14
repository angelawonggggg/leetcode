// two pointers technique
var twoSum = function (numbers, target) {
  start = 0;
  end = numbers.length - 1;
  while (start < end) {
    for (let i = start; i < end; i++) {
      if (numbers[start] + numbers[end] > target) {
        end--;
      } else if (numbers[start] + numbers[end] < target) {
        start++;
      } else {
        return [start + 1, end + 1];
      }
    }
  }
};

twoSum([3, 24, 50, 79, 88, 150, 345], 200);

// two for loops

// var twoSum = function(numbers, target) {
//     for(let i=0; i<numbers.length; i++) {
//         let firstNum = numbers[i];
//         for(let j=i+1; j<numbers.length; j++) {
//             let secondNum = numbers[j];
//             if(firstNum + secondNum == target) {
//                 console.log([i+1,j+1])

//             }
//         }
//     }

// };

// twoSum([2,7,11,15], 9)
