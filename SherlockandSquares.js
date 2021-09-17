//https://www.hackerrank.com/challenges/sherlock-and-squares/problem?h_r=next-challenge&h_v=zen

function squares(a, b) {
    let smallSquare = Math.sqrt(a);
    let bigSquare = Math.sqrt(b);
    let result = Math.floor(bigSquare) - Math.ceil(smallSquare) + 1;
    return result;
}