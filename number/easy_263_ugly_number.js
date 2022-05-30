let n = 100

var isUgly = function(num) {
    if(num <= 0){
        return false;
    }
    if(num <= 6) return true;

    while(num > 2){
        if(num%2 !== 0){
            break;   
        }
        num = parseInt(num/2);
        console.log('factor of 2:',num)
    }

    while(num > 3){
        if(num%3 !== 0){
            break;   
        }
        num = parseInt(num/3);
        console.log('factor of 3:',num)

    }

    while(num > 5){
        if(num%5 !== 0){
            break;   
        }
        num = parseInt(num/5);
        console.log('factor of 5:',num)
    }

    console.log(num)
    return num%2===0 || num % 3 === 0 || num%5 ===0;
}

console.log(isUgly(n))