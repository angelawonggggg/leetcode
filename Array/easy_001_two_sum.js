var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let secondNum = nums[j];
      if (secondNum == target - firstNum) {
        console.log([i, j]);
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);

// The time complexity is O(n^2) for this solution, to optimize it, we can use the two pointer technique. 
