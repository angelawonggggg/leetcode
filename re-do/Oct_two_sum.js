let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i];

    if (map[another] >= 0) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }
};

console.log(twoSum(nums, target));
