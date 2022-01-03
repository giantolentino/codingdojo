console.log("page loaded...");

document.getElementById("sample").addEventListener("mouseover", function () {
	this.play();
});

document.getElementById("sample").addEventListener("mouseleave", function () {
	this.pause();
});
