//[1, 2, 3] -> [1, 2, 3]
// [2, 6, 4, 1, 2] -> [1, 2, 2, 4, 6]
// compareArray([1, 2, 3], [1, 2, 3]) : true
// compareArray([1, 2, 3], [1, 2, 2]) : false
// compareArray([1, 2, 3], [1, 2]) : false



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

var inpute1 = [1, 2];
var inpute2 = [3, 1, 2, 2];
var inpute3 = [2, 6, 4, 1, 2];

console.log (inpute2.length);


function compareArray(inpute1, inpute2) {
    if (inpute1.length !== inpute2.length){
        return false;
    }

    for (i = 0; i < inpute1.length; i++) {
        if (inpute1[i] != inpute2[i]) {
            return false;
        }
    } 
    return true;
}

function tri(input) {
    var tmp;
    for (var i = 0; i < input.length; i++) {
        for(var j = 0; j < input.length; j++) {
            if (input[i] < input[j]) {
                tmp = input[i];
                input[i] = input[j];
                input[j] = tmp;
            }
        }
    }
    return input;
}

console.log(tri(inpute3));


console.log(compareArray(inpute1, inpute2));

var result = exercise([1, 2, 3]);
console.log("[5, 4, 3] : ", result);

result = exercise([2, 6, 4, 1, 2]);
console.log("[13, 9, 11, 14, 13] : ", result);

console.log("----------------------------------------");




var result2 = exercise2([1, 2, 3]);
console.log("[6, 3, 2] : ", result2);

result2 = exercise([2, 6, 4, 1, 2]);
console.log("[13, 9, 11, 14, 13] : ", result2);
