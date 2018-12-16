//Num Expression
var NumExp = function(n, exp) {
	this.n = n;
	this.e = exp;
};


var message ="";		


var solve = function(nums, target) {

	var size = nums.length;

	if (size === 1) {
		if (nums[0].n === target) {
			return nums[0].e;
		} else {
			return "";
		}
	} else 

	if (size > 1) {
		var n1 = nums[0];
		var n2 = nums[1];
		if (solve([n2], target - n1.n) !== "") {
			// n1 + n2 == target
			return "("+n1.e+"+"+n2.e+")";
		} else if (solve([n2], target + n1.n) !== "") {
			// n2 - n1 == target
			return "("+n2.e+"-"+n1.e+")";
		} else if (solve([n1], target + n2.n) !== "") {
			// n2 - n1 == target
			return "("+n1.e+"-"+n2.e+")";
		} else if (target === 0 ) {
			if ( n1.n === 0  || n2.n === 0 ) {
				return "("+n1.e+"*"+n2.e+")";
			}
		} else {


			if ((n1.n !== 0) && (n2.n !== 0) && (solve([n2], target / n1.n) !== "")) {
				// n1 * n2 == target
				return "("+n1.e+"*"+n2.e+")";
			} else if (solve([n2], target * n1.n) !== "") {
				// n2 - n1 == target
				return "("+n2.e+"/"+n1.e+")";
			} else if (solve([n1], target * n2.n) !== "") {
				// n2 - n1 == target
				return "("+n1.e+"/"+n2.e+")";
			} else {
				return "";
			}
		}   

	} else 

	if (size )
	

	var exp = "";
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

    var n1 = document.getElementById("n1").value;
    var numExp1 = new NumExp(parseInt(n1), n1);
    var n2 = document.getElementById("n2").value;
    var numExp2 = new NumExp(parseInt(n2), n2);
    var n3 = document.getElementById("n3").value;
    var numExp3 = new NumExp(parseInt(n3), n3);
    var n4 = document.getElementById("n4").value;
    var numExp4 = new NumExp(parseInt(n4), n4);

    message = "";
    solve([numExp1,numExp2,numExp3,numExp4], 24);

    document.getElementById("message").innerHTML = message;
};
