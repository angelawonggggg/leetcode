let n = 10

var canWinNim = function(n) {
    if(n < 4) {
        return true
    }
    return n%4 !== 0
};


console.log(canWinNim(n))