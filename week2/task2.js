function repeatStringNumTimes1(str, num) {
  // repeat after me
  var result = "";
  if(num > 0){
    for(var i=1;i<=num;i++){
      result += str;
    }
  }
  return result;
}
function repeatStringNumTimes2(str, num) {
  // repeat after me
  var result = "";
  if(num > 0){
	let i = 0;
    while(i < num){
      result += str;
	  i++;
    }
  }
  return result;
}
function repeatStringNumTimes3(str, num) {
  // repeat after me
  var result = "";
  if(num > 0){
	let i = 0;
    do{
      result += str;
	  i++;
    }
	while(i < num);
  }
  return result;
}

repeatStringNumTimes1("abc", 3);
repeatStringNumTimes2("abc", 3);
repeatStringNumTimes3("abc", 3);