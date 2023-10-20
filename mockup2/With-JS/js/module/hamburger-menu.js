// Function to handle the behavior of the hamburger menu
export function hamMenu() {
	// Get the menu icon (usually represented by 3 horizontal lines)
	const menuIcon = document.querySelector(".ham-icon");

	// Get the navigation menu
	const menu = document.querySelector("nav");

	// Add a click event listener to the menu icon
	menuIcon.addEventListener("click", function () {
		// Toggle the "show" class to show or hide the menu
		menu.classList.toggle("show");
	});

	// Add a resize event listener to the window
	window.addEventListener("resize", function () {
		// If the screen width is greater than 768px, ensure the menu is visible
		if (window.innerWidth > 768) {
			menu.classList.remove("show");
			menu.style.display = "block";
		} else {
			// If the screen width is less than or equal to 768px,
			// revert to the default display style (e.g., potentially hidden)
			menu.style.display = "";
		}
	});

	// Initial check when the function is loaded to determine the visibility
	// of the menu based on screen width.
	// This ensures that if the page is loaded on a screen wider than 768px,
	// the menu is displayed
	if (window.innerWidth > 768) {
		menu.classList.remove("show");
		menu.style.display = "block";
	}
}
