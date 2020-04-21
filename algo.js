//[1, 2, 3] -> [5, 4, 3]
// [2, 6, 4, 1, 2] -> [13, 9, 11, 14, 13]


function exercise(input) {
    var tab = [];
    for (var i = 0; i < input.length; i++) {
        var result = 0;
        for (var j = 0; j < input.length; j++) {
            if (i != j) {
                result += input[j];
            }
        }
        tab.push(result);
    }
    return tab;
}

function exercise1(input) {
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

var result = exercise([1, 2, 3]);
console.log("[5, 4, 3] : ", result);

result = exercise([2, 6, 4, 1, 2]);
console.log("[13, 9, 11, 14, 13] : ", result);

console.log("----------------------------------------");



var result2 = exercise1([1, 2, 3]);
console.log("[5, 4, 3] : ", result2);

result2 = exercise1([2, 6, 4, 1, 2]);
console.log("[13, 9, 11, 14, 13] : ", result2);

console.log("----------------------------------------");


