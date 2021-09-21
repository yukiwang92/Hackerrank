//https://www.hackerrank.com/challenges/cut-the-sticks/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function cutTheSticks(arr) {
    let res = [];
    res.push(arr.length)
    let cutArray = [...arr];
    while (cutArray.length !== 0){
        let smallestInte = Math.min(...cutArray);
        cutArray = cutArray.map( elem => elem - smallestInte );
        cutArray = cutArray.filter( elem => elem > 0);
        if (cutArray.length !== 0){
            res.push(cutArray.length)
        }
    }
    return res;
}
//Second solution
function cutTheSticks(arr) {
    let res = [];
    while (arr.length !== 0){
        let smallestInte = Math.min(...arr);
        res.push(arr.length)
        for (let i = 0; i < arr.length; i++){
            let sub = arr[i] - smallestInte;
            if (sub === 0){
                arr.splice(i,1)
                i--
            } else {
                sub = arr[i]
            }
        }       
    }    
    return res;
}
