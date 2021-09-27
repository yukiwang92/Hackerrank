//https://www.hackerrank.com/challenges/append-and-delete/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function appendAndDelete(s, t, k) {
    let count = 0;
    for (let i = 0; i < s.length && i < t.length; i++){
        if (s.charAt(i) === t.charAt(i)){
            count++;
        } else {
            break;
        }
    } 
    console.log(count)
    let sDiff = s.length - count;
    let tDiff = t.length - count;
    let min = sDiff + tDiff;
    let max = s.length + t.length;
    if ( (min <= k && k < max) && ((k - min ) % 2 === 0) || k >= max){
        return "Yes"
    }
        return "No"
}