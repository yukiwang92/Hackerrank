//https://www.hackerrank.com/challenges/extra-long-factorials/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function extraLongFactorials(n) {
    let result = 1n;
    while(n > 0){
        result = result * BigInt(n);
        n--;
    }
}