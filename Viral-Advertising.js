//https://www.hackerrank.com/challenges/strange-advertising/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function viralAdvertising(n) {
    let totalLike = 0;
    let peopleReached = 5
    let peopleLike = Math.floor(peopleReached / 2)
    for (let i = 1; i <= n; i++){
        peopleLike = Math.floor(peopleReached / 2);
        peopleReached = peopleLike * 3;
        totalLike += peopleLike
    }
    return totalLike;
}