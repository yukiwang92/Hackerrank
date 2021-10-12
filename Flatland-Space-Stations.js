//https://www.hackerrank.com/challenges/flatland-space-stations/problem
function flatlandSpaceStations(n, c) {
    let res = 0;
    for (let i = 0; i < n; i++){
        let minDis = Infinity;
        for (let j = 0; j < c.length; j++){
            let dis = Math.abs(i - c[j]);
            if ( minDis > dis){
                minDis = dis;
            }
        }
        if (minDis > res){
            res = minDis
        } 
    }      
    return res;
}