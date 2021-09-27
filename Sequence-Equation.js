//https://www.hackerrank.com/challenges/permutation-equation/problem?h_r=next-challenge&h_v=zen
function permutationEquation(p) {
    let result = [];
    let indexInte = 0;
    for (let x = 1; x <= p.length; x++){
            indexInte = p.indexOf(x) + 1;
            result.push(p.indexOf(indexInte) + 1);
    }
    return result;
}