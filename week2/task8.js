function printArray(arr){
	arr.forEach(function(val){
		if(Array.isArray(val))
			printArray(val);
		else
			console.log(val);
	});
}
let arr = [[1,2], [3,4], [[100,1000],[50,500 , [-100 , -200]]]];
printArray(arr);