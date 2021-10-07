//https://www.hackerrank.com/challenges/chocolate-feast/problem
function chocolateFeast(n, c, m) {
    let initialChoco = Math.floor(n/c);
    let wrappers = initialChoco;
    let count = 0;
    while (wrappers >= m){
        wrappers -= m;
        wrappers++;
        count++;
    }
    return count + initialChoco;
}