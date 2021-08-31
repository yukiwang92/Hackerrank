//https://www.hackerrank.com/challenges/the-hurdle-race/problem
//FirstSolution
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

//SecondSolution
function hurdleRace(k, height) {
    let dose = 0;
    let highest = 0;
    for (let i = 0; i < height.length; i++){
        if (height[i] > highest){
        highest = height[i];
        }
    }
        if (k < highest){
            dose = highest - k;
        } else {
            dose = 0;
        }
    return dose
}