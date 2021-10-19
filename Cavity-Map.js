//https://www.hackerrank.com/challenges/cavity-map/problem
function cavityMap(grid) {
    let res = [];
    let newArray = [];
    for (let k = 0; k < grid.length; k++){
        newArray.push(grid[k])
    }
    
    for(let i = 1; i < grid.length - 1; i++){
        for(let j = 1; j < grid[0].length - 1; j++){
            if (newArray[i][j] > newArray[i - 1][j] && 
            newArray[i][j] > newArray[i + 1][j] && 
            newArray[i][j] > newArray[i][j - 1] && 
            newArray[i][j] > newArray[i][j + 1]){
                grid[i] = grid[i].slice(0, j) + "X" + grid[i].slice(j + 1);
            }
        }
    }
    
    return grid;
}