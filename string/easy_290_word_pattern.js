let pattern = "jquery", s = "jquery"

var wordPattern = function(pattern, s) {
    let mapS = {}
    let mapP = {}
    
    if(pattern.length !== s.split(" ").length) {    // This part is important, eg for the case of p = "jquery", s = "jquery"
        return false
    }

    for(let i in pattern) {                        // let i in pattern =/= let i in pattern.length
        let valueS = s.split(" ")[i]
        let valueP = pattern.split("")[i]
        
        
        if(!mapS[valueS]) {
            mapS[valueS] = valueP
            console.log(mapS, mapP)
            console.log(valueS)
        } else if(mapS[valueS] !== valueP) {
            return false
        }

        if(!mapP[valueP]) {
            mapP[valueP] = valueS
            console.log(mapS, mapP)
        } else if(mapP[valueP] != valueS) {
            return false
        }
    }
        return true   
};

console.log(wordPattern(pattern,s))