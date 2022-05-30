let s = "PAYPALISHIRING";
let numRows = 3

var convert = function(s, numRows) {
    if(s == null) return "" 
    if(numRows == 1) return s 

    var n = numRows*2 -2;
    var array = []
    

    // 創立一個有numRows元素的array
    for(let i=0; i<numRows; i++) {
        array.push("")
    }   


    
        console.log(s[0] + s[4] + s[8] + s[12])
        

    
    
};

console.log(convert(s, numRows))