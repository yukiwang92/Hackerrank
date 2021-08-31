//https://www.hackerrank.com/challenges/the-hurdle-race/problem
function hurdleRace(k, height) {
    let dose = 0;
    let highest = Math.max(...height);
    if (k < highest){
        dose = highest - k;
    } else {
        dose = 0;
    }
    return dose
}
