let nums = [-1, 0, -1];

var containsDuplicate = function (number) {
  let map = {};
  for (let i = 0; i < number.length; i++) {
    // if(number.length <= 1) { return false } 

    if (!map[number[i]]) {
      map[number[i]] = 1;
    } else {
      map[number[i]]++;
      if (map[number[i]] >= 2) {
        return true;
      }
    }
  }

  return false;    // 如果唔符合condition一律return false
};

console.log(containsDuplicate(nums));

//var containsDuplicate = function(nums) {
//     var keep = [];
//     for(var i in nums){
//         if(keep.indexOf(nums[i])<0){
//             keep.push(nums[i]);
//         } else {
//             return true;
//         }
//     }
//     return false;
// };
