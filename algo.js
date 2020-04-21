//[1, 2, 3] -> [6, 3, 2]
// [2, 6, 4, 1, 2] -> [48, 16, 24, 96, 13]



function exercise(input) {
    var tab = [];
    var result = 0;
    var sum = computeSum(input);

    for (var i = 0; i < input.length; i++) {
        result = sum - input[i];
        tab.push(result);
    }
    return tab;
}

function computeSum(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum;
}


function computePoduct(input) {
    var pro = 1;
    for (var i = 0; i < input.length; i++) {
        pro *= input[i];
    }
    return pro;
}



function exercise2(input) {
    var tab = [];
    var result = 0;
    var pro = computePoduct(input);

    for (var i = 0; i < input.length; i++) {
        result = pro / input[i];
        tab.push(result);
    }
    return tab;
}




var result = exercise([1, 2, 3]);
console.log("[5, 4, 3] : ", result);

result = exercise([2, 6, 4, 1, 2]);
console.log("[13, 9, 11, 14, 13] : ", result);

console.log("----------------------------------------");




var result2 = exercise2([1, 2, 3]);
console.log("[6, 3, 2] : ", result2);

result2 = exercise([2, 6, 4, 1, 2]);
console.log("[13, 9, 11, 14, 13] : ", result2);
