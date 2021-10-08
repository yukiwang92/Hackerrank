//https://www.hackerrank.com/challenges/service-lane/problem?h_r=next-challenge&h_v=zen
function serviceLane(n, widths, cases) {
    let res = [];
    for (let i = 0; i < cases.length; i++){
        let segment = widths.slice(cases[i][0], cases[i][1]+1);
        res.push(Math.min(...segment))        
    }
    return res;
}