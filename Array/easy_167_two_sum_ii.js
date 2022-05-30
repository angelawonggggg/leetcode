var twoSum = function(numbers, target) {
    for(let i=0; i<numbers.length; i++) {
        let firstNum = numbers[i];
        for(let j=i+1; j<numbers.length; j++) {
            let secondNum = numbers[j];
            if(firstNum + secondNum == target) {
                console.log([i+1,j+1])

            }
        }
    }
    
};

twoSum([2,7,11,15], 9)