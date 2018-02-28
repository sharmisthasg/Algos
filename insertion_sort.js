<script>
var array = prompt("Enter your numbers").split(",");

function insertionsort(array){
	
	//Traversing the entire length of the array
	for (var i = 0; i < array.length; i++){
		var cur = array[i];
		var pos = i;
		//Moving elements before the current position, 
		//and greater than the current element,
		//to one position ahead of their current position
		while (cur < array[pos-1] && pos>=1){
			array[pos] = array[pos-1];
			pos = pos - 1;
		}
		array[pos] = cur;	
	}
	return array; //array is now sorted
}

document.write(insertionsort(array));

</script>

