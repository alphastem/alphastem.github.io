var message ="";		
var reduce = function(numbers, exps) {

	//message += "<br/><br/>reduce: {["+numbers.join(",")+"] ["+exps.join(",")+"]}";
	var firstNumber = [];
	var firstNumberExp = [];

	// + 
	firstNumber.push(numbers[0]+numbers[1]);
	firstNumberExp.push("("+exps[0]+"+"+exps[1]+")");
	
    // -
	if (numbers[0]-numbers[1] >= 0) {
		firstNumber.push(numbers[0]-numbers[1]);
		firstNumberExp.push("("+exps[0]+"-"+exps[1]+")");
	}
	else if (numbers[0] !== numbers[1]) {	
		firstNumber.push(numbers[1]-numbers[0]);
		firstNumberExp.push("("+exps[1]+"-"+exps[0]+")");
	}
	// * 
	firstNumber.push(numbers[0]*numbers[1]);
	firstNumberExp.push("("+exps[0]+"*"+exps[1]+")");
	
	// /
	if (numbers[0] !== 0) {
		firstNumber.push(numbers[1]/numbers[0]);
		firstNumberExp.push("("+exps[1]+"/"+exps[0]+")");
	}
	if (numbers[1] !== 0 && numbers[1] !== numbers[0]) {
		firstNumber.push(numbers[0]/numbers[1]);
		firstNumberExp.push("("+exps[0]+"/"+exps[1]+")");
	}

	var newList = [];
	for (var i=0;i<firstNumber.length;i++) { 
		var list = [];
		list.push(firstNumber[i]);
		var exp = [];
		exp.push(firstNumberExp[i]);
		for (var j = 2; j< numbers.length; j++) {
		    list.push(numbers[j]);
		    exp.push(exps[j]);
		}
		//list.push(numbers[3]);
		//list.concat(numbers.slice(2,numbers.length-2));
        //exp.concat(exps.slice(2));
		var obj ={};
		obj.l = list;
		obj.e = exp;
		// message+= list.join(",");
		// message+=" ";
		// message+= exp.join(",");
		// message+=" ";
		newList.push(obj);
		
    }
    //message += "List size:"+newList.length;
	return newList;   
};

var reduceAll = function(list) {

	//message += "<br/><br/>reduceAll"
	var newList = [];
	for (var index = 0;index < list.length; index++) {
	    var element = list[index];

		var numbers = element.l;
		//message = numbers.toString();
		var exps = element.e;
        //message += numbers.join(",");
        //message += "<br/><br/>reducing "+numbers.join(",");
		var s = numbers.length; 
		var hash = new Set();

		for (var i =0;i < s; i++) {
			for (var j = 0; j <s; j++) {
				if (i !== j) {
					var list4=[];
					var list4Exp = [];
					list4.push(numbers[i]);
					list4Exp.push(exps[i]);
					list4.push(numbers[j]);
					list4Exp.push(exps[j]);
					if (s > 2) {
						for (var k = 0; k < s; k++) {
							if (k !== i && k !== j) {
								list4.push(numbers[k]);
								list4Exp.push(exps[k]);
							}
						}
					}
					//message += list4Exp.join(",");
					var key = list4.join(",");
					if (!hash.has(key)) {
						var obj = reduce(list4,list4Exp);
						//message+=obj.length;
						//newList.concat(obj);
						for ( var l = 0;l<obj.length;l++) {
							newList.push(obj[l]);
						}
						hash.add(key);
					}
				}
			}
		}
					
	}
	//message +="<br/><br/>reduceAll return size: "+newList.length;
	// return newList;
	
	// remove redundency
	var hash = new Set();
	var ret = [];
	for (var i = 0;i<newList.length;i++) {
		var obj = newList[i];
		var numbers = obj.e;
		var key = numbers.slice().sort().toString();
		//print("key:"+key)
		if  (!hash.has(key)) {
			ret.push(obj);
			hash.add(key);
		}
	}
	return ret;
};

var solve = function(nums) {
    //message += "<br/> Solving"+nums.join(",");
	var size = nums.length;
	var exps = [];
	for (var i = 0; i < size ; i++) {
		exps.push(nums[i].toString());
	}
	var obj = {};
	obj.l = nums;
	obj.e = exps;
	//message = obj.e.toString();
	var list = [obj];
	for (var i = 0; i< size-1; i++) {
		list = reduceAll(list);
	}
	
    // message = list.toString();
	
	var count = 0;
	for (var i = 0; i<list.length;i++) { 
		var obj = list[i];
		if (obj.l[0] === 24) { 
			message += obj.e[0];
			message += ", "
			count = count + 1;
		}
	}
	message += "<br/><br/># of Solutions: "+count.toString();

};

var solveIt = function() {
    //reduceAll({"l":[1,2,3,4],"e":["1","2","3","4"]});
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var n4 = parseInt(document.getElementById("n4").value);
    message = "";
    solve([n1,n2,n3,n4]);

    document.getElementById("message").innerHTML = message;
};
