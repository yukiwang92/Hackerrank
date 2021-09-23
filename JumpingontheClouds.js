//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_r=next-challenge&h_v=zen
function jumpingOnClouds(c) {
    let count = 0;
    for (let i = 0; i < c.length - 1;){
        if (c[i + 2] !== 1){
            count++;
            i+=2;
        } else {
            count++;
            i+=1;
        }
    }
    return count;
}