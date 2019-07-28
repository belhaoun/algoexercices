function sumArray(my_array) {
	var sum = 0;
	for(var i = 0; i < my_array.length; i++) {
		sum = sum + my_array[i];
	}
	return sum;
}

function average(my_array) {
	var sizeArray = my_array.length;
	var result = sumArray(my_array) / sizeArray;
	return result; 
}

function contains(my_array, value) {
	for (var i = 0; i < my_array.length; i++) {
		if (value == my_array[i]) {
			return true;
		}
	}
	return false;
}


function indexElement(my_array, value) {
	for(var i = 0; i < my_array.length; i++) {
		if (my_array[i] == value) {
			return i;
		}
	}
	return -1;
}

var my_array = [6, 3, 6, 6, 7, 7, 8, 3, 4];
var result = indexElement(my_array, 20);
console.log(result);