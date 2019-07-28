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

function removeIndex(my_array, index) {
	var result = [];
	if (index >= my_array.length || index < 0) {
		throw Error("Index out of boundries");
	}
	for(var i = 0; i < my_array.length; i++) {
		if (index !== i) {
			result.push(my_array[i]);
		}
	}
	return result;
}

var my_array = [6, 3, 6];
var result = removeIndex(my_array, 0);
console.log(result);