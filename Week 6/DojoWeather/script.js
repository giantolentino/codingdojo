console.log("page loaded...");
var unit = document.getElementById("unit");
var today_red_c = document.querySelector("#today-red-c").innerHTML;
var tomorrow_red_c = document.querySelector("#tomorrow-red-c").innerHTML;
var friday_red_c = document.querySelector("#friday-red-c").innerHTML;
var saturday_red_c = document.querySelector("#saturday-red-c").innerHTML;
var today_blue_c = document.querySelector("#today-blue-c").innerHTML;
var tomorrow_blue_c = document.querySelector("#tomorrow-blue-c").innerHTML;
var friday_blue_c = document.querySelector("#friday-blue-c").innerHTML;
var saturday_blue_c = document.querySelector("#saturday-blue-c").innerHTML;

const new_todRedC = document.querySelector("#today-red-c");
const new_tmrwRedC = document.querySelector("#tomorrow-red-c");
const new_friRedC = document.querySelector("#friday-red-c");
const new_satRedC = document.querySelector("#saturday-red-c");
const new_todBlueC = document.querySelector("#today-blue-c");
const new_tmrwBlueC = document.querySelector("#tomorrow-blue-c");
const new_friBlueC = document.querySelector("#friday-blue-c");
const new_satBlueC = document.querySelector("#saturday-blue-c");

unit.onchange = function () {
	if (unit.value === "f") {
		new_todRedC.innerHTML = (today_red_c * 1.8 + 32).toFixed();
		new_tmrwRedC.innerHTML = (tomorrow_red_c * 1.8 + 32).toFixed();
		new_friRedC.innerHTML = (friday_red_c * 1.8 + 32).toFixed();
		new_satRedC.innerHTML = (saturday_red_c * 1.8 + 32).toFixed();
		new_todBlueC.innerHTML = (today_blue_c * 1.8 + 32).toFixed();
		new_tmrwBlueC.innerHTML = (tomorrow_blue_c * 1.8 + 32).toFixed();
		new_friBlueC.innerHTML = (friday_blue_c * 1.8 + 32).toFixed();
		new_satBlueC.innerHTML = (saturday_blue_c * 1.8 + 32).toFixed();
	}
};

function loadingAlert() {
	alert("Loading weather report...");
}

function hideCookieBox() {
	document.getElementById("cookie-box").style.display = "none";
}
