//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?h_r=next-challenge&h_v=zen
function designerPdfViewer(h, word) {
    let area = 0;
    let height = 0;
    let letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for(let j = 0; j < word.length; j++){
        for (let i = 0; i < h.length; i ++){
            if (word.charAt(j) === letter[i]){
                if (height < h[i]){
                 height = h[i];                   
                }
            }    
        }
    }
    return area = height * word.length;
}
