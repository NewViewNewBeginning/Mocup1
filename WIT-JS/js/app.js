// Importing the functionality for the image showcase
import { initShowcase } from "./module/showcase.js";

// Importing the functionality for showing/hiding text
import { showText } from "./module/showText.js";

// Importing the functionality for toggling light/dark mode
import { setMode } from "./module/mode.js";

// Once the entire HTML document has been completely loaded and parsed, execute the following functions
document.addEventListener("DOMContentLoaded", function () {
	// Initialize the image showcase functionality
	initShowcase();

	// Initialize the show/hide text functionality
	showText();

	// Initialize the mode switching (light/dark) functionality
	setMode();
});
