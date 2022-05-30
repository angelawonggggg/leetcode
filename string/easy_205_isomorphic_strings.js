let s = "badc", t="baba"

var isIsomorphic = function(s, t) {
    // structure same  
    let mapS = {}
    let mapT = {}

    for(let i in s) {
        let valueS = s[i];
        let valueT = t[i]; 

        if(!mapS[valueS] ) {
            mapS[valueS] = t[i]
        } else if(mapS[s[i]] != valueT) {
            return false
        } 

        if(!mapT[valueT]){
            mapT[valueT] = valueS;
        } else if(mapT[valueT] != valueS) { 
            return false;
        }
    }

    return true   
};

console.log(isIsomorphic(s,t))