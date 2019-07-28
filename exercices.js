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

var my_array = [4, 4, 3, 10, 4, 15, 6, 7, 8, 9, 10];

displayGrid(3, 3);
