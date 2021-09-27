//https://www.hackerrank.com/challenges/equality-in-a-array/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function equalizeArray(arr) {
    let res = 0;
    let map = new Map()
    for (let i = 0; i < arr.length; i++){
        if (map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    let max = 0;
    for (let value of map.values()){
        if (max < value){
            max = value;
        }      
    }
    return res = arr.length - max
}