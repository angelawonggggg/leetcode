let n = 6   //11+12+21 = 11 12 21 (6)
// n =6 // 31 22 11  (6)
// n=7 // 13 11 22 21 (8)
// n = 8 // 11 13 21 32 11  (10)

var countAndSay = function(n) {

    if(n <= 1) { return '1'}

    let countSay = '1'
    
    for(let i=2; i<= n; i++) {                //想由0開始數，唔洗寫if(n>1) {xxx}, 直接寫for loop i=2就可以
        let num = countSay.charAt(0);
        let temp = countSay;
        let count = 1;

        countSay = ''
        for(let j=1; j<temp.length; j++) {
            if(temp.charAt(j) == num) {
                count++
            } else {
                countSay +=count;
                countSay +=num;
                num = temp.charAt(j)
                count = 1
            }
        }
        countSay += count;
        countSay += num;
    }
    return countSay
}

    


console.log(countAndSay(n))