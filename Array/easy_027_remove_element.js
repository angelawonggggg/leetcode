let val = 3;
let nums = [3,3,5,3]

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1); //it will only check the first element in the array
      i = -1;
    }
  }
  return nums.length;
};

console.log(removeElement(nums, val))
