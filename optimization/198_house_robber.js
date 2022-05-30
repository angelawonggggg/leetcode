let nums = [14,10,9, 20, 35]   
// 14 14 23 34 58
var rob = function(nums) {
    let maxMoney = new Array();

    if(nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);

    maxMoney.push(nums[0]);
    maxMoney.push(Math.max(nums[0], nums[1]))
    
    for(let i = 2 ; i < nums.length ; i++) {
        maxMoney[i] = Math.max(nums[i] + maxMoney[i-2], maxMoney[i-1])   // 咁既做法可以令maxMoney index同nums係對應
        console.log(maxMoney)

    }

    return maxMoney.pop()     // return array入面最後果個value
};

console.log(rob(nums))