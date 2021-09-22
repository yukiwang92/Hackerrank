//https://www.hackerrank.com/challenges/repeated-string/problem
function repeatedString(s, n) {
    let res = 0;
    let indexA = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] === "a"){
            indexA.push(i + 1);
        }
    }
    let repeatTimes = Math.floor(n / s.length)
    if (n % s.length === 0){
        res = indexA.length * repeatTimes
    } else {
        let count = 0;
        for (let j = 0; j <indexA.length; j++){
            if (indexA[j] <= (n % s.length)){
                count++;
            }
        }
        res = indexA.length * repeatTimes + count;
    }
    return res;
}

//Second solution
function repeatedString(s, n) {
    let res = 0;
    let timeOfA = 0;
    let count = 0;
    let repeatTimes = Math.floor(n / s.length)
    let remainder = n % s.length;

    for (let i = 0; i < s.length; i++){
        if (s[i] === "a"){
            timeOfA++;
            if (i + 1 <= remainder){
                count++
            }
        }
    }   
    res = timeOfA * repeatTimes + count;
    return res;
}