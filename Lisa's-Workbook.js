//https://www.hackerrank.com/challenges/lisa-workbook/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function workbook(n, k, arr) {
    let pageNum = 1;
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j <= arr[i]; j++){
            if(j === pageNum){
                res++;
            }
            if(j % k === 0){
                pageNum++;
            }
        }
        if(arr[i] % k != 0){
            pageNum++;
        }
    }  
    return res;
}

