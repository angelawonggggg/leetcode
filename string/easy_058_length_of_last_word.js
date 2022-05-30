let s = "joyboy"

var lengthOfLastWord = function(s) {
    let word = s.trim().split(' ')
    let length = word.length
    return word[length-1].length
    
};


console.log(lengthOfLastWord(s))