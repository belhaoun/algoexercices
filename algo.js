//[1, 2, 3] -> [5, 4, 3]
// [2, 6, 4, 1, 2] -> [13, 9, 11, 14, 13]


function exercise(input) {
    var tab = [];
    for (var i = 0; i < input.length; i++) {
        var result = 0; 
        for (var j = 0; j < input.length; j++) {
            if(i != j) {
                result += input[j]; 
            } 
            
        }
        tab.push(result);
    }
    
    return tab;
}


var result = exercise([1, 2, 3]);
console.log("[5, 4, 3] : ", result);

result = exercise([2, 6, 4, 1, 2]);
console.log("[13, 9, 11, 14, 13] : ", result);
