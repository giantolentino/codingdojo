var likes_1 = document.querySelector("#likes").innerHTML;
const new_likes_1 = document.querySelector("#likes");
const like_btn_1 = document.getElementById("like-btn-1");

var likes_2 = document.querySelector("#likes-2").innerHTML;
const new_likes_2 = document.querySelector("#likes-2");
const like_btn_2 = document.getElementById("like-btn-2");

var likes_3 = document.querySelector("#likes-3").innerHTML;
const new_likes_3 = document.querySelector("#likes-3");
const like_btn_3 = document.getElementById("like-btn-3");

like_btn_1.addEventListener("click", function () {
	new_likes_1.innerHTML = ++likes_1;
});

like_btn_2.addEventListener("click", function () {
	new_likes_2.innerHTML = ++likes_2;
});

like_btn_3.addEventListener("click", function () {
	new_likes_3.innerHTML = ++likes_3;
});
