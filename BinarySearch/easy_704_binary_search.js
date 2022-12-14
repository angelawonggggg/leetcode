let nums = [-1, 0, 3, 5, 9, 12],
  target = 12;

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    if (nums[mid] === target) {
      return mid;
    }
  }

  return -1;
};

console.log(search(nums, target));
