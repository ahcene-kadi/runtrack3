document.addEventListener("keydown", function(focus) {
	text = document.getElementById("keylogger");
	text.value += focus.key;
});