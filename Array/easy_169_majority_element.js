let number = [3,2,4,4,4,4,3,3,3,3,3]
// 將啲element轉做數字黎count

//Array method
var majorityElement = function(number) {
    let array = []
    for(let i=0; i< number.length; i++) {
        let n = number[i]
        if(number.length <= 1) {return number[0]}
        

       if(! array[n]) {
           array[n] = 1
       } else {
           array[n]++   // can't write map[n] = 1++, coz map[n] is already 1 (number)
           if(array[n] > (number.length/2)) {
            return n
        }
       }
    }  
};

// Map method 
var majorityElement = function(number) {
    let map = {}
    for(let i=0; i< number.length; i++) {
        let n = number[i]
        if(number.length <= 1) {return number[0]}
        

       if(! map[n]) {
           map[n] = 1
       } else {
           map[n]++   // can't write map[n] = 1++, coz map[n] is already 1 (number)
           if(map[n] > (number.length/2)) {
            return n
        }
       }
    }  
};

console.log(majorityElement(number))