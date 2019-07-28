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

function copyArray(my_array) {
	var new_array = [];
	for(var i = 0; i < my_array.length; i++) {
		new_array.push(my_array[i]);
	}
	return new_array;
}

function getMax(my_array) {
	var max = my_array[0];
	for(var i = 0; i < my_array.length; i++) {
		if(max < my_array[i]) {
			max = my_array[i];
		}
	}
	return max;
}


function reverseArray(my_array) {
	var result= [];
	for(i = my_array.length - 1; i >= 0; i--) {
		result.push(my_array[i]);
	}
	return result;
}


function sortNumerique(my_array) {
	for(var i = 0; i < my_array.length; i++) {
		for(var j = i; j < my_array.length; j++){
			if(my_array[j] < my_array[i]) {
				var tmp = my_array[i];
				my_array[i] = my_array[j];
				my_array[j] = tmp;
			}
		}
	}
	return my_array;
}

function displayGrid(nombreLigne, nombreColone) {
	for(var i = 0; i < nombreLigne; i++) {
		var ligne = ""; 
		for( var j = 0; j < nombreColone; j++) {
			ligne += "-";
		}
		console.log(ligne);
	}
}

function commonElements(my_array1, my_array2) {
	var result = [];
	for(var i = 0; i < my_array1.length; i++) {
		for(var j = 0; j < my_array2.length ; j++)
			if (my_array1[i] == my_array2[j]) {
				result.push(my_array1[i]);
			}
	}
	return result;
}

function isElementInArray(value, my_array) {
	for(var i = 0; i < my_array.length; i++){
		if (value == my_array[i]) {
			return true;
		}
	}
	return false;
}


function eliminerdouble(my_array) {
	var result = [];
	for(var i = 0; i < my_array.length; i++) {
		var isValueInArray = isElementInArray(my_array[i], result);
		if (!isValueInArray) {
			result.push(my_array[i]);
		}
	}
	return result;
}

function secondLargest(my_array) {
	var max = my_array[0];
	var secondMax = Number.MIN_SAFE_INTEGER;

	for(var i = 0; i < my_array.length; i++) {
		if (max < my_array[i]){
			max = my_array[i];
		}
		if(secondMax < my_array[i] && my_array[i] <= max) {
			secondMax = my_array[i];
		}
	}
	return secondMax;
} 

function isEqualArray(array1, array2) {
	if(array1.length != array2.length) {
		return false;
	}
	for(var i = 0; i < array1.length; i++) {
		if(my_array2[i] != my_array1[i]) {
			return false;
		}
	}
	return true;
}

function countEvenOddArray(array) {
	var result = {even : 0, odd : 0};
	for (var i = 0; i < array.length; i++) {
		if(array[i] % 2 === 0) {
			result.odd++;
		} else {
			result.even++
		}
	}
	return result;
} 

function subArray(debut, fin ,array) {
	var new_array = [];
	if(debut < 0) {
		debut = 0;
	} else if(fin > array.length) {
		fin = array.length;
	}
	for(var i = debut; i < fin; i++) {
		new_array.push(array[i]);
	}
	return new_array;
} 



var my_array1 = [1, 3, 3, 4, 2, 4, 5];
var my_array2 = [];

var result =   subArray(0, 2 ,my_array1);
console.log(result);
