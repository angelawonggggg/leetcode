let nums = [1, 3, 5, 6],
  target = 7;

var searchInsertBinarySearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

var searchInsert = function (nums, target) {
  let isFound = nums.indexOf(target);

  if (isFound == -1) {
    if (target < nums[0]) {
      //nums.unshift(target);
      return 0;
    } else if (target > nums[nums.length - 1]) {
      //nums.push(target);
      return nums.length;
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        //nums.splice(i, 0, target);
        return i;
      }
    }
  }

  //console.log(isFound, nums);

  return isFound;
};

console.log(searchInsert(nums, target));
