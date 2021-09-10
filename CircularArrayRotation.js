//https://www.hackerrank.com/challenges/circular-array-rotation/problem
function circularArrayRotation(a, k, queries) {
    let newArray = [];
    k = k % a.length;
    for (let i = 0; i < queries.length; i++){
        if (queries[i] - k >= 0){
        newArray.push(a[queries[i] - k])
        } else {
            newArray.push(a[queries[i] - k + a.length])
        }
    }
    return newArray;
}