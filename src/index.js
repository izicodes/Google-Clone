const inputField = document.querySelector("#inputField");
const xMark = document.querySelector("#xMark");
const searchBtn = document.querySelector("#searchBtn");

function showXMark() {
	var length = inputField.value.length;

	if (length > 0) {
		xMark.style.opacity = "1";
		xMark.style.cursor = "pointer";
	} else {
		xMark.style.opacity = "0";
		xMark.style.cursor = "default";
	}
}

setInterval(showXMark, 100);

xMark.addEventListener("click", function () {
	inputField.value = "";
});

function searchQuery() {
	var inputText = inputField.value.replace(/ /g, "+").toLowerCase();
	var URL = "https://www.bing.com/search?q=" + inputText;
	window.open(URL, "_blank");
}

searchBtn.addEventListener("click", function () {
	searchQuery();
});

inputField.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		searchQuery();
	}
});
