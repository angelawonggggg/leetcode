
let s = 'hello'  

var reverseVowels = function(s) {
    
    let vowels = []
    let indexHelper = []

    for(let i = 0; i<s.length; i++) {
        if((/^[aeiou]$/i).test(s[i])) {
            vowels.push(s[i])
            indexHelper.push(i)
        }
    }

    let sArray = s.split("")
    let replacement = vowels.reverse()     
      

    for(let j=0; j<indexHelper.length; j++) {
        let index = indexHelper[j] 
        // let replacement = vowels.reverse()           點解擺replacement係呢個位唔得？ -> 因為array.replace係in place，所以會不斷reverse同一個vowels
        sArray[index] = replacement[j]      
    }
    return sArray.join("")
};

console.log(reverseVowels(s))