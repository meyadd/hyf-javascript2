function sayThree(){
	console.log("sayThree");
}
function sayFive(){
	console.log("sayFive");
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

	//make array
	let arr = [];
	for(let i=startIndex;i<=stopIndex;i++){
		arr.push(i);
	}
	console.log(arr);
	
	arr.forEach(function(val){
		if(val%3==0)
			threeCallback();
		if(val%5==0)
			fiveCallback();
		
	});
	  
}

threeFive(10, 15, sayThree, sayFive);

