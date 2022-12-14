let nums = [87063, 61094, 44530, 21297, 95857, 93551, 9918],
  k = 6;

// [ 1, 4, 7, 9 ]

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b); // !!! 唔應該就咁用array.sort() 記得要加callback

  let minDiff = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (i >= k - 1) {
      minDiff = Math.min(minDiff, nums[i] - nums[i - k + 1]); //因為sort咗，所以left係最細，right係最大
    }
  }

  return minDiff;
};

console.log(minimumDifference(nums, k));
