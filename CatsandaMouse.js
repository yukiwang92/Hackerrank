
//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?h_r=next-challenge&h_v=zen
function catAndMouse(x, y, z) {
    return Math.abs(z - x) < Math.abs(z - y)? "Cat A" : Math.abs(z - x) > Math.abs(z - y)? "Cat B" : "Mouse C";
}