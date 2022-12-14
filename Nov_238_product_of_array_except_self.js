let nums = [1, 2, 3, 4];
// let left = [1, 1, 2, 6];
// let right = [1, 4, 12, 24];
// let ans = [24, 12, 8, 6];

// Method 1 : 分左右
// Method 2 ； 全部數乘埋除自己，但有0就得0有數
var productExceptSelf = function (nums) {
  let ans = [1];
  let left = 1;

  // get the left
  for (let i = 1; i < nums.length; i++) {
    left = nums[i - 1] * left;
    ans[i] = left;
  }

  // multiply left and right

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < nums.length - 1) {
      right = right * nums[i + 1];
      ans[i] = ans[i] * right;
    }
  }

  return ans;
};

console.log(productExceptSelf(nums));
