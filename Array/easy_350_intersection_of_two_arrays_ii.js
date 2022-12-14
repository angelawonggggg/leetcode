let nums1 = [1, 2],
  nums2 = [1, 1];

var intersect = function (nums1, nums2) {
  let shorterArray = nums1.length <= nums2.length ? nums1 : nums2;
  let longerArray = nums1.length > nums2.length ? nums1 : nums2;

  let result = [];
  for (let i = 0; i < shorterArray.length; i++) {
    let isFound = longerArray.indexOf(shorterArray[i]);
    if (isFound != -1) {
      result.push(shorterArray[i]);
      longerArray[isFound] = null;
    }
  }

  //console.log(result);
  return result;
};

console.log(intersect(nums1, nums2));
