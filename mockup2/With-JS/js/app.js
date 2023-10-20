// Importing functionalities from different module files
import { hamMenu } from "./module/hamburger-menu.js"; // Hamburger menu functionality
import { quoteHandle } from "./module/quote.js"; // Functionality to handle quotes
import { scrollTop } from "./module/scroll-top.js"; // Scroll-to-top functionality
import { handleModal } from "./module/modal.js"; // Modal display functionality

// Adding an event listener to execute once the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
	hamMenu(); // Activate hamburger menu functionality
	setInterval(quoteHandle, 10000); // Call the quoteHandle function every 10 seconds
	scrollTop(); // Activate scroll-to-top functionality
	handleModal(); // Activate modal display functionality

	// Update year in footer
	const year = new Date().getFullYear(); // Get the current year
	document.getElementById("currentYear").innerText = year; // Set the text of the element with ID "currentYear" to the current year
});
