let n = 10

var guessNumber = function(n) {
    let left = 1, right = n; 

    while(left <= right) {
        let mid = Math.trunc((left+right)/2); 
        let check = guess(mid);
        if(check === 0) return mid;
        if(check < 0) right = mid - 1;
        else left = mid + 1;
    }

    return left   
};



console.log(guessNumber(n))