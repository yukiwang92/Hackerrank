//https://www.hackerrank.com/challenges/minimum-distances/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function minimumDistances(a) {
    let minDis = Infinity;
    let distance  = 0;
    for (let i = 0; i < a.length - 1; i++){
        for (let j = i + 1; j < a.length; j++){
            if (a[i] === a[j]){
                distance = j - i;
                if (distance < minDis){
                    minDis = distance;
                }
                break;
            } 
        } 
    }
    if (minDis === Infinity){
        return -1;
    }
    return minDis;
}

//Second solution
function minimumDistances(a) {
    let minDis = -1;
    let distance  = 0;
    let map = new Map();
    for (let i = 0; i < a.length; i++){
        if (map.has(a[i])){
            let index = map.get(a[i])
            distance = i - index;
            if (minDis === -1 || distance < minDis){
                minDis = distance
            }
        } else {
            map.set(a[i], i)
        }  
    } 
    return minDis;
}