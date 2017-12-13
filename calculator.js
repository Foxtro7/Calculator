// JavaScript Document

var m = "";

// Change Display
function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

function store_mem() {
	e();
	m = document.getElementById("d").value;
}

function clear_mem() {
	m = "";
}

//Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("quick not maths");
	}
}