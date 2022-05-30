//https://dev.to/ani03sha/add-binary-leetcode-67-1m1a
// 個位數加出黎個carry係俾十位數用
// 有4種sum
// 3係答案=1，carry=1
// 2係答案=0，carry=1
// 1係答案=1，carry=0
// 0係答案=0，carry=0

// sum = carry      // sum: 1
// a is 1, so
// sum +=1            // sum: 2
// b is 1, so
// sum +=1            // sum: 3

// result:
// sum % 2              // 3 % 2 = 1

let a = "101101", b = "111101"

var addBinary = function(a, b) {
   // let larger = Math.max(a.length, b.length) 
    // console.log(larger)
let result = ""
let first = a.length -1;
let second = b.length -1;
let carry = 0

    while(first >= 0 || second >= 0) {
        // sum of 2 bits
        let sum = carry;
        if( first >= 0) {
            sum += a[first--] - '0';        // - ‘0’ 將本身個數字string變做number   
        }

        if( second >= 0 ) {
            sum += b[second--] - '0'
        }

        console.log('sum', sum)

        // Add the bit to the result
        result = sum % 2 + result;  
        console.log('result', result)

        // Modify carry
        carry = parseInt(sum / 2)
        console.log('carry',carry)
    }

    // Final check if carry exists 
    if(carry > 0) {
        result = 1 + result
    }

    return result
};

addBinary(a,b)