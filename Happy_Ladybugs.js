//https://www.hackerrank.com/challenges/happy-ladybugs/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function happyLadybugs(b) {
    let isHappyAlready = true;
    let map = new Map();
    
    for(let i = 0; i < b.length; i++) {
        if(b.charAt(i) != "_") {
            if(i == 0 && b.charAt(i) != b.charAt(i + 1)) {
                isHappyAlready = false;        
            } else if(i == b.length - 1 && b.charAt(i) != b.charAt(i - 1)) {
                isHappyAlready = false;
            } else {
                if(b.charAt(i) != b.charAt(i - 1) && b.charAt(i) != b.charAt(i + 1)) {
                    isHappyAlready = false;
                }
                
            }
            
            if(map.has(b.charAt(i))) {
                map.set(b.charAt(i), map.get(b.charAt(i)) + 1);
            }else {
                map.set(b.charAt(i), 1);
            }
        }else{
            map.set("_", 1);
        }
    }
    
    if(isHappyAlready) {
        return "YES";
    }
    
    if(!map.has("_")) {
        return "NO";
    }
    
    for(const [key, value] of map.entries()){
        if(key != "_" && value == 1){
            return "NO";
        }
    }
    
    return "YES";
}