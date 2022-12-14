let nums = [0];

var moveZeroes = (nums) => {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    // move all the non zero numbers to the front
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex + 1; i < nums.length; i++) {
    nums.fill(0, nonZeroIndex);
  }

  return nums;
};

console.log(moveZeroes(nums));
