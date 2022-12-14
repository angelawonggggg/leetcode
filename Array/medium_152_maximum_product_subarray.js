let nums = [-2, -1, -8];

var maxProduct = function (nums) {
  let prev = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(Math.max(prev * nums[i]), nums[i]);

    // if (prev > prev * nums[i]  || prev < nums[i] + 1) {
    //   prev = nums[i];
    // }
    max = Math.max(max, prev);
  }

  return max;
};

console.log(maxProduct(nums));
