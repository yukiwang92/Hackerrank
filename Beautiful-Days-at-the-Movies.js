//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function beautifulDays(i, j, k) {
    let reverseInt = 0;
    let beautifulDaysCount = 0;
    for (let day = i; day <= j; day++ ){
        reverseInt = day.toString().split("").reverse().join("") 
        if (Math.abs(reverseInt-day) % k === 0){
            beautifulDaysCount++
        }
    }
    return beautifulDaysCount;
}