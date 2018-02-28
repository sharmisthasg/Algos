<script>
var array = prompt("Enter your numbers").split(",");

function insertionsort(array){
	
	for (var i = 0; i < array.length; i++){
		var cur = array[i];
		var pos = i;
		while (cur < array[pos-1] && pos>=1){
			array[pos] = array[pos-1];
			pos = pos - 1;
		}
		array[pos] = cur;	
	}
	return array;
}

console.log(insertionsort(array));

</script>
