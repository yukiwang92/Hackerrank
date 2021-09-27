//https://www.hackerrank.com/challenges/taum-and-bday/problem
function taumBday(b, w, bc, wc, z) {
    const bb = BigInt(b);
    const wb = BigInt(w);
    const bcb = BigInt(bc);
    const wcb = BigInt(wc);
    const zb = BigInt(z);
    let cost = 0;

    if (bcb > wcb + zb){
        cost = (bb + wb) * wcb + (bb * zb);
    } else if (wcb > bcb + zb){
        cost = (bb + wb) * bcb + (wb * zb);
    } else {
        cost = (bb * bcb) + (wb * wcb);
    }
    
    return BigInt(cost);
}
