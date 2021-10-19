//https://www.hackerrank.com/challenges/manasa-and-stones/problem?h_r=next-challenge&h_v=zen
function stones(n, a, b) {
    const res = new Set()
    for(let i = 0; i < n; i++){
        res.add(i * a + ((n - 1 - i) * b));
    }    
    let arr = Array.from(res);
    let sortedArr = arr.sort((a,b) => a-b)
    return arr;
}