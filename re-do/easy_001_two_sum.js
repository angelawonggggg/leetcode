let nums = [1, 3, 4, 5, 6, 10, 15, 20, 16];

var twoSum = function (nums, target) {
  let map = {}; // 呢題用array.sort整個sorted array再用2 pointers係比較快

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }
  return null;
};

console.log(twoSum(nums, 16));
