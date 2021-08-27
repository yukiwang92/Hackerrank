function getMoneySpent(keyboards, drives, b) {
    let spent = [];
    let maxSpent = 0;
    for (let i = 0; i < keyboards.length; i++){
        for (let j = 0; j < drives.length; j++){
            if (keyboards[i]+drives[j] <= b){
                spent.push(keyboards[i]+drives[j]);
            }  
        }
    }
    if (spent.length === 0){
        return maxSpent = -1;
    } else {
        return maxSpent = Math.max(...spent)
    }
}
