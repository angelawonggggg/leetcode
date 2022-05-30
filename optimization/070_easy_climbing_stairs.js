n = 3;

var climbStairs = function(n) {
    if(n == 1 ) return 1

    let prev = 1
    let sum = 1

    for(let i = 2; i <= n; i++) {
        let now = sum
        console.log(sum)
        sum = sum + prev
        prev = now
    }
    return sum
    
};

console.log(climbStairs(n))