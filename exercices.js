function sumArray(my_array) {
	var sum = 0;
	for(var i = 0; i < my_array.length; i++) {
		sum = sum + my_array[i];
	}
	return sum;
}

var array = [10, 3, 10];
var result = sumArray(array);
console.log(result);