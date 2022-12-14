let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

var merge = function (nums1, m, nums2, n) {
  let back = m + n - 1;
  n--;
  m--;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[back] = nums1[m];
      m--;
    } else {
      nums1[back] = nums2[n];
      n--;
    }
    back--;
  }

  return nums1;
};

console.log(merge(nums1, m, nums2, n));
