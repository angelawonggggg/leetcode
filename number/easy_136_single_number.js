let nums = [2, 2, 12, 12, 0];

var singleNumber = function (nums) {
  let map = {};

  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == 1) return nums[i];
  }
};

console.log(singleNumber(nums));
