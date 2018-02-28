<script>
var arr = prompt("Enter the elements of an array with non decreasing elements ").split(",");;
var size = arr.length;
var elem = prompt("Enter the element to be found");
var left;
var right;

var index = function binary_search(arr, left, right, elem){
		
        var mid = left + (right - left)//2;
        
        // If the element is present in the middle
        if (arr[mid] == elem)
           return mid;
           
        // If the element is not present in the array
        if (left == right || left > right)
        	return -1;
          
        // If the element is smaller than the middle element, then it can only be present on its left
        if (elem < arr[mid])
           return binary_search(arr, left, mid-1, elem);

        // Else the element can only be present on its right
        return binary_search(arr, mid+1, right, elem);
}

var result = index(arr,0,size-1,elem);
if (result == -1)
   document.write("Element not found");
else
   document.write("Element found at index position " + result);
    

</script>

