var reverse = function(x) {
    
    let reversedNumber = parseInt(x.toString().split('').reverse().join(''));

    if(x<0) {
        reversedNumber = -reversedNumber
    } 
    
    if(reversedNumber <= -(2 ** 31) || reversedNumber >= ((2 ** 31) -1)) {
        return 0
    } else {
        return reversedNumber
    }
    
};

console.log(reverse(-2147483641))

// A signed integer is a 32-bit datum that encodes 
// an integer in the range [-2 147 483 648 to 2 147 483 647].  = 2^31 -1 