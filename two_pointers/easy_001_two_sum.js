let nums = [3,3];       
let target = 6;

// Two pointers 
var twoSum = function (nums, target) {

    let sortedArray = [...nums].sort(function(a,b) {    // array.sort modifies the array in place, so we are copying the original array [...nums] 
        return a - b;                                   // sorting takes nlogn which can slow down the runtime
    })

    let i = 0;
    let j = sortedArray.length - 1
    
        while(i<j) {
            if(sortedArray[i] + sortedArray[j] === target) {
                return [nums.indexOf(sortedArray[i]), nums.indexOf(sortedArray[j])]
            } else if (sortedArray[i] + sortedArray[j] > target) {
                j--
            } else {
                i++
            }
        }
  };
  
  console.log(twoSum(nums, target));