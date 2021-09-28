//https://www.hackerrank.com/challenges/kaprekar-numbers/problem
function kaprekarNumbers(p, q) {
    let res = [];
    for (let i = p; i <= q; i++){
        let square = Math.pow(i,2);
        let digitLength = i.toString().length;
        let squareLength = square.toString().length;
        let r = square.toString().slice(squareLength - digitLength, squareLength);
        let l = square.toString().slice(0, squareLength - digitLength);

        let rNum = parseInt(r);
        let lNum = l.length == 0 ? 0 : parseInt(l);
        
        if(rNum + lNum === i){
            res.push(i);
        }
    }
    if (res.length === 0){
        console.log("INVALID RANGE");
    } else {
        console.log(res.join(" "));
    }
}
//Second Solution
function kaprekarNumbers(p, q) {
    let res = [];
    for (let i = p; i <= q; i++){
        let square = Math.pow(i,2);
        let digitLength = i.toString().length;
        let squareLength = square.toString().length;
        let r = square.toString().slice(squareLength - digitLength, squareLength);
        let l = square.toString().slice(0, squareLength - digitLength);
        if (squareLength === 1 && square === i || squareLength > 1 && parseInt(l) + parseInt(r) === i){
            res.push(i)
        } else {
            res           
        }
    }
    if (res.length === 0){
        console.log("INVALID RANGE");
    } else {
        console.log(res.join(" "));
    }
}