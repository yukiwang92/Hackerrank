//https://www.hackerrank.com/challenges/strange-code/problem?isFullScreen=true
function strangeCounter(t) {
    let initial = 3;
    let time = 1;
    while(t - time >= initial){
        time += initial;
        initial *= 2;
    }
    
    return initial - (t - time);
}