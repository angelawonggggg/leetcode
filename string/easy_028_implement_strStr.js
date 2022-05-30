let haystack = "";
let needle = "a"; 

//What should we return when needle is an empty string? This is a great question to ask during an interview.
//  let result = haystack.match(needle).index 
var strStr = function(haystack, needle) {
    if(needle.length === 0 ) return 0
    
    let result = haystack.indexOf(needle)
    return result
    
};

console.log(strStr(haystack, needle))