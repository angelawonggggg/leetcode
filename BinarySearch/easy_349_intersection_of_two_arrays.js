let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

var intersection = function (nums1, nums2) {
  // 將array轉set
  let ans = [];
  let set = new Set();
  for (let i = 0; i < nums2.length; i++) {
    set.add(nums2[i]);
  }

  for (let j = 0; j < nums1.length; j++) {
    if (set.has(nums1[j])) {
      ans.push(nums1[j]);
      set.delete(nums1[j]);
    }
  }

  return ans;
};

console.log(intersection(nums1, nums2));
