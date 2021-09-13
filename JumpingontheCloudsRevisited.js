//https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?h_r=next-challenge&h_v=zen
function jumpingOnClouds(c, k) {
    let firstIndex = (0 + k) % c.length;
    let energy = c[firstIndex] == 1 ? 97 : 99;
    let index = firstIndex;
    while (index !== 0){
        let nextIndex = (index + k) % c.length;
        energy -= c[nextIndex] == 1 ? 3 : 1;
        index = nextIndex;
    }
    return energy;
}