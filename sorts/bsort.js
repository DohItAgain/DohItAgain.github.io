var x = ["grapes","apples","bananas","papaya","pear","peach","oranges","lemons","limes","tangerine","watermelons"];
var before = document.getElementById("before");
var after = document.getElementById("after");
displayArray(x,before);

function displayArray(array, id) {
	var output = ""
	for (var i = 0; i < array.length; i++) {
		output += array[i] + " ";
	}
	id.innerHTML = output;
}

function sort() {
	bubbleSort(x);
}

function bubbleSort(array) {
	var changed;
	do {
		changed = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i+1]) {
				var tmp = array[i];
				array[i] = array[i+1]
				array[i+1] = tmp;
				changed = true;
			}
		}	
	} while (changed)

	displayArray(x,after);
}