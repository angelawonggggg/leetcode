let A = -3; //A
let B = 0;  // B
let C = 3; // C
let D = 4; // D
let E = 0; // E
let F = -1; // F
let G = 9; // G
let H = 2;// H


var computeArea = function (A, B, C, D, E, F, G, H) {
    var r1 =  Math.abs(A-C)*Math.abs(B-D);
    var r2 =  Math.abs(E-G)*Math.abs(F-H);

    // 如果ABCD與EGFH沒重疊，直接將r1,r2加總
    if( A >= G || B >= H || C <= E || D <= F){
        return r1+r2;
    }

    // 計算重疊的部分
    var rD = Math.abs( (Math.max(A,E) - Math.min(C,G)) * (Math.max(B,F) - Math.min(D,H)) )

    return r1+r2 - rD;
};

console.log(computeArea(A, B, C, D, E, F, G, H));
