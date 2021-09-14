//https://www.hackerrank.com/challenges/find-digits/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen//
function findDigits(n) {
    let arrayN = n.toString().split("");
    let result = 0;
    for (let i = 0; i < arrayN.length; i++){
        if (n % arrayN[i] === 0){
            result++;
        }
    }
    return result;
}