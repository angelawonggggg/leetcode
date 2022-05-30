
n = 10

var solution = function(isBadVersion) {
    // /**
    //  * @param {integer} n Total versions
    //  * @return {integer} The first bad version
    //  */
    return function(n) {
        let start = 0;
        let end = n ; 
        let mid;
        
        
        
while(start < end) {
    mid = start+ Math.trunc((end-start)/2)  
    if(isBadVersion(mid)) {
        end = mid  ;
    } else {
        start = mid + 1 
    }

    

    }
    return end

}
};

solution(isBadVersion)