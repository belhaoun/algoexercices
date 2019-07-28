      
var my_array = [10, 3, 10, 4, 15, 6, 7, 8, 9, 10];

function sortNumerique(my_array) {
	for (var i = 0; i <= my_array.length; i++) {
		for (var j = i; j <= my_array.length; j++) { 
			if(my_array[j] < my_array[i]) {
				var tmp = my_array[i];
				my_array[i] = my_array[j];
				my_array[j] = tmp;
			}
		}
	}
return my_array;
}
//result = sortNumerique(my_array);
//console.log(result);

function sum(my_array) {
	var sum = 0;
	for(var i = 0; i < my_array.length; i++) {
		sum = sum + my_array[i];
		//console.log(sum);
	}
	return sum;
}


function average(my_array) {
	var nombretableau = my_array.length;
	var average = sum(my_array)/ nombretableau;
	return average; 
}

//var average = average(my_array);
//console.log(average);

function contain(my_array, value) {
	for (var i = 0; i <= my_array.length; i++) {
		if (value == my_array[i]) {
			return true;
		} else {
			return false;
		}
	}
}

//var contain = contain(my_array, 0);
//console.log(contain);

function indexElement(my_array, value) {
	for(var i = 0; i <= my_array.length; i++) {
		if (my_array[i] == value) {
			return i;
		} else {
		return false;
		}
	}
}

var result = indexElement(my_array, 1);
console.log(result);

function removeIndex(my_array, index) {
	for (var i = 0; i <= my_array.length; i++) {
		if (i == index) {
			my_array = my_array.splice(index,1);
		}
		return my_array;
	}
}

function copyArray(my_array) {
	var new_array;
	for(var i = 0; i <= my_array.length; i++) {
		new_array[i] = my_array[i];
	}
	return new_array;
}

function insertElemet(my_array, value, index) {
	// hana kannsayb fiha
}

function maxArray(my_array) {
	var max = my_array[0];
	for(var i = 0; i <= my_array.length; i++) {
		if(max < my_array[i]) {
			max = my_array[i];
		}
	}
	return max;
}

//var max = maxArray(my_array);
//console.log(max);

function minArray(my_array) {
	var min = my_array[0];
	for(var i = 0; i < my_array.length; i++) {
		if(my_array[i] < min) {
			min = my_array[i];
		}
	}
	return min;
}

var min = minArray(my_array);
console.log(min);

function reserveArray(my_array) {
	var reserveArray = [];
	for(var i = my_array.length - 1; i >= 0 ; i--) {
		reserveArray.push(my_array[i]);
		//console.log(reserveArray);
	}
	return reserveArray;
}

var reserveArray = reserveArray(my_array);
console.log(reserveArray);

function duplicateElemet(my_array) {
	for (var i = 0; i < my_array.length-1; i++) {
        for (var j = i+1; j < my_array.length; j++) {
            if ((my_array[i] == my_array[j]) && (i != j)) {
                console.log("The element is : ", my_array[j]);
            }
        }
    }
}    


var duplicateElemet = duplicateElemet(my_array);
console.log(duplicateElemet);
