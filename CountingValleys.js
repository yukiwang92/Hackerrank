function countingValleys(steps, path) {
    let hikePoint = 0;
    let valleyCount = 0;
    for (let i = 0; i < path.length; i++){
        if (hikePoint === -1 & path[i] === "U") {
            valley++;
        }
        if (path[i] === "U"){
            hikePoint++;
        } else {
            hikePoint--;
        }
    }
    return valleyCount;
}
