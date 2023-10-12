import { initShowcase } from "./module/showcase.js";
import { showText } from "./module/showText.js";
import { setMode } from "./module/mode.js";

document.addEventListener("DOMContentLoaded", function () {
	initShowcase();
	showText();
	setMode();
});
