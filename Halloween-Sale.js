//https://www.hackerrank.com/challenges/halloween-sale/problem
function howManyGames(p, d, m, s) {
    let res = 0;
    let remaining = s;    
    let price = p;

    while (remaining - price >= 0){
        res += 1;
        remaining -= price;
        price -= d;
        if (price <= m){
            price = m;
        }
    } 
    
    return res;
}