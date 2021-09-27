//https://www.hackerrank.com/challenges/acm-icpc-team/problem
function acmTeam(topic) {
    let maxTopic = 0;
    let teams = 0;
    for(let i = 0; i < topic.length - 1; i++){
        for(let j = i + 1; j < topic.length; j++){
            let count = 0;
            for(let k = 0; k < topic[j].length; k++){
                if(topic[i].charAt(k) === '1' || topic[j].charAt(k) === '1'){
                    count++;
                }
            }
            if(count > maxTopic){
                maxTopic = count;
                teams = 1;
            }else if(count == maxTopic){
                teams++;
            }
        }
    }
    let res = [maxTopic, teams];
    return res;
}