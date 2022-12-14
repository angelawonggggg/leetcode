// 這題用到的技巧後面有不少題目一樣會用到，使用另外一個變數index來記錄碰到的非0數字，遇到非0整數，將整數塞到index的位子， 最後陣列長度扣除index就是0的數目，將陣列index之後的數字改為0就完成搬移的動作。

// Q26 uses the same technique = move all the elements you want to the front by using a counter

// ex. nums = [0, 1, 0 , 3] , index = 0
// nums[0] == 0, 跳過
// nums[1] == 1, nums[0] = 1, index++;
// nums[2] == 0, 跳過
// nums[3] == 3, nums[1] = 3, index++;
// 結束後 nums = [1,3,0,3]，接下來將nums後面的[0,3]用0取代

let number = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nonZeroIndex] = nums[i]; // moving all non zero numbers to the beginning of the array
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0; // fillinf the rest of the array with 0s
  }

  return nums;
};

var moveZeroes1 = function (number) {
  var index = 0;
  for (let i = 0; i < number.length; i++) {
    n = number[i];
    if (n !== 0) {
      number[index++] = n; //n = number[index++] is not the same
    }
  }

  for (index; index < number.length; index++) {
    number[index] = 0;
  }

  return number;
};

console.log(moveZeroes(number));
