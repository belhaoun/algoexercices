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

var my_array = [6, 3, 6, 6, 7, 7, 8, 3, 4];
var result = average(my_array);
console.log(result);
