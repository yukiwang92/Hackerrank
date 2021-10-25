//https://www.hackerrank.com/challenges/the-grid-search/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function gridSearch(G, P) {
    for(let i = 0; i <= G.length - P.length; i++){
        let fromIndex = 0;
        while(G[i].indexOf(P[0], fromIndex) != -1){
            let foundAt = G[i].indexOf(P[0], fromIndex);
            let notFound = false;
            for(let j = 1; j < P.length; j++){
                if(G[i + j].indexOf(P[j], fromIndex) != foundAt){
                    notFound = true;
                    break;
                }
            }
            
            if(notFound){
                fromIndex = foundAt + 1;
            }else {
                return "YES";
            }  
        }
    }   
    return "NO";
}