var isPalindrome = function(x) {

    let fromBackward = parseInt(x.toString().split('').reverse().join(''));
    if(x<0) {
        return false;
    } else if (x == fromBackward) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(10))