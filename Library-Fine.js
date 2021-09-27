//https://www.hackerrank.com/challenges/library-fine/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function libraryFine(d1, m1, y1, d2, m2, y2) {
    let result = 0;
    if (y2 - y1 < 0){
        result = 10000
    } else if (y2 === y1 && m2 - m1 < 0){
        result = (m1 - m2 )* 500;
    } else if (y2 === y1 && m2 === m1 && d2 - d1 < 0){
        result = (d1 - d2) * 15
    }
return result;
}