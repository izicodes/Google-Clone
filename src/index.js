const inputField = document.querySelector("#inputField");
const xMark = document.querySelector("#xMark");
const searchBtn = document.querySelector("#searchBtn");
const darkModeSettings = document.querySelector("#darkModeSettings");
const darkModeBtn = document.querySelector("#darkModeBtn");
const settingBtn = document.querySelector("#settingBtn");

darkModeSettings.style.display = "none";

settingBtn.addEventListener("click", function () {
	var status = darkModeSettings.style.display;

	if (status == "none") {
		darkModeSettings.style.display = "block";
	} else {
		darkModeSettings.style.display = "none";
	}
});

darkModeBtn.addEventListener("click", function () {
	var mode = darkModeSettings.dataset.mode;

	if (mode == "Off") {
		darkModeBtn.innerHTML = 'Dark Mode: On <i class="fa-solid fa-toggle-on"></i>';
		darkModeSettings.setAttribute("data-mode", "On");
	} else if (mode == "On") {
		darkModeBtn.innerHTML = 'Dark Mode: Off <i class="fa-solid fa-toggle-off"></i>';
		darkModeSettings.setAttribute("data-mode", "Off");
	}
});

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
