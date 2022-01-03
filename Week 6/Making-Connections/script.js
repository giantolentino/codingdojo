console.log("page loaded...");

var profile = document.querySelector("#profile-name").innerHTML;
const new_profile = document.querySelector("#profile-name");
var requests = document.querySelector("#connections-requests").innerHTML;
const new_requests = document.querySelector("#connections-requests");
var connections = document.querySelector("#your-connectons").innerHTML;
const new_connections = document.querySelector("#your-connectons");

const edit_profile = document.getElementById("edit-profile");
const accept_1 = document.getElementById("accept-1");
const deny_1 = document.getElementById("deny-1");
const accept_2 = document.getElementById("accept-2");
const deny_2 = document.getElementById("deny-2");

function reduce_requests() {
	new_requests.innerHTML = --requests;
}

edit_profile.addEventListener("click", function () {
	new_profile.innerHTML = "Janet Donner";
});

accept_1.addEventListener("click", function () {
	var el = document.getElementById("todd-e");
	el.remove();
	new_connections.innerHTML = ++connections;
});
deny_1.addEventListener("click", function () {
	var el = document.getElementById("todd-e");
	el.remove();
});
accept_2.addEventListener("click", function () {
	var el = document.getElementById("phil-e");
	el.remove();
	new_connections.innerHTML = ++connections;
});
deny_2.addEventListener("click", function () {
	var el = document.getElementById("phil-e");
	el.remove();
});
