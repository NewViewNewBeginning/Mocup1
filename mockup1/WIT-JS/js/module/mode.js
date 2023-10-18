// Function to set the mode (light or dark) for the website
export function setMode() {
	// Grab the sun icon from the DOM, which will represent the light mode
	const sunIcon = document.querySelector(".fa-sun");

	// Grab the moon icon from the DOM, which will represent the dark mode
	const moonIcon = document.querySelector(".fa-moon");

	// Grab the root element (highest parent) of the DOM. This is where the light/dark mode class will be toggled
	const rootElement = document.documentElement;

	// Add an event listener to the sun icon. When it's clicked, the light mode will be activated
	sunIcon.addEventListener("click", () => {
		rootElement.classList.add("light-mode");
	});

	// Add an event listener to the moon icon. When it's clicked, the light mode will be deactivated (i.e., dark mode will be activated)
	moonIcon.addEventListener("click", () => {
		rootElement.classList.remove("light-mode");
	});
}
