// Exporting a function named scrollTop
export function scrollTop() {
	// Get the scroll top button element by its ID
	const scrollTopBtn = document.getElementById("scrollTopBtn");

	// Add an event listener to the window for the scroll event
	window.addEventListener("scroll", () => {
		// Check if the vertical scroll position is greater than 200 pixels
		if (window.scrollY > 200) {
			// If true, display the scroll top button
			scrollTopBtn.style.display = "block";
		} else {
			// Otherwise, hide the scroll top button
			scrollTopBtn.style.display = "none";
		}
	});

	// Add a click event listener to the scroll top button
	scrollTopBtn.addEventListener("click", () => {
		// On button click, smoothly scroll the window back to the top
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}
