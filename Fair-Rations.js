//https://www.hackerrank.com/challenges/fair-rations/problem?h_r=next-challenge&h_v=zen
function fairRations(B) {
    let res = 0;
    if (B.filter((v) => v % 2 !== 0).length % 2 !== 0) {
        return "NO";
    } else {
        for (let i = 0; i < B.length; i++){
            if (B[i] % 2 !== 0){
                B[i]++;
                B[i + 1]++;
                res += 2
            }    
        }
    }
    return res
}
