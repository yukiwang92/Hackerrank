//https://www.hackerrank.com/challenges/save-the-prisoner/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function saveThePrisoner(n, m, s) {
    let result = 0;
    if ((m - 1 + s) % n !== 0){
        result = (m - 1 + s) % n
    } else {
        result = n;
    }
    return result;
}
// solution 2
function saveThePrisoner(n, m, s) {
    return (m - 1 + s) % n || n
}