let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubarray = (nums) => {
  let prev = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev, prev + nums[i]); // count or start over
    max = Math.max(max, prev); // find the max
  }

  return max;
};

console.log(maxSubarray(nums));
