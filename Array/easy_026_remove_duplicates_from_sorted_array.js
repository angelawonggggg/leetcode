let nums = [0, 1, 1, 1, 2, 2, 3, 3, 10]; // [1,]

var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    // console.log(nums.indexOf(nums[i])); // array.indexOf() returns the index of the first matching element only
    if (nums[count] != nums[i]) {
      count++; // 有一個distinct element
      nums[count] = nums[i];
    }
  }

  console.log(nums);
  return ++count; // 如果用count++會攞咗第8行個count++既value，真係想+1要用++count
};

console.log(removeDuplicates(nums));
