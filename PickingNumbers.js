function pickingNumbers(a) {
    let map = new Map();
    let res = 0;
    for (let i = 0; i < a.length; i++){
        if (map.has(a[i])){
            let currentCount = map.get(a[i]);
            
            map.set(a[i], currentCount+1)
        } else {
            map.set(a[i],1)
        }
    }
    for (let j of map.keys()){
        let currentRes = map.get(j);
        console.log(currentRes)
        if (map.has(j+1)){
            currentRes += map.get(j+1)
        } 
        if (map.has(j-1)){
            if(map.get(j)+map.get(j-1) > currentRes){
                currentRes = map.get(j)+map.get(j-1)
            }           
        }
        if (currentRes > res){
            res = currentRes
        }
    }
    return res;
}