function printArray(arr){
	arr.forEach(function(val){
		if(Array.isArray(val))
			printArray(val);
		else
			console.log(val);
	});
}
let arr = [[1,2], [3,4], [5,6]];
printArray(arr);