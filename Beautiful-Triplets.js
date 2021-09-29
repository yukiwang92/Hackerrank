//https://www.hackerrank.com/challenges/beautiful-triplets/problem?h_r=next-challenge&h_v=zen
function beautifulTriplets(d, arr) {
    let count = 0;
    let tripleLength = 0;
    if (arr.length < 3){
        return count;
    } else {
        for(let i = 1; i < arr.length - 1; i++){
            let preCount = 0;
            let postCount = 0;
            for(let j = i - 1; j >= 0; j--){
                if(arr[i] - arr[j] === d){
                    preCount++;
                }else if(arr[i] - arr[j] > d) {
                    break;
                }
            }
            
            if(preCount === 0){
                continue;
            }
            
            for(let k = i + 1; k < arr.length; k++){
                if(arr[k] - arr[i] === d){
                    postCount++;
                }else if(arr[k] - arr[i] > d){
                    break;
                }
            }
            
            if(preCount > 0 && postCount > 0){
                count += preCount * postCount;
            }
        }
    }
    return count;
}
