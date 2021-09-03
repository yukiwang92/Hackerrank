//https://www.hackerrank.com/challenges/angry-professor/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function angryProfessor(k, a) {
    let answer = "";
    let arriveOnTime = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] <= 0){
            arriveOnTime = arriveOnTime + 1;
        }
    }
    if (arriveOnTime >= k){
        answer = "NO"
    } else {
        answer = "YES"
    }
    return answer;
}