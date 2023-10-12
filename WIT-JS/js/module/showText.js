export function showText() {
	const showHideTextLinks = document.querySelectorAll(".show-text");
	let fullTexts = [];

	showHideTextLinks.forEach((link, index) => {
		const textElement = link.previousElementSibling;
		fullTexts[index] = textElement.textContent; // Store full text in array

		// Initial truncate if needed
		if (fullTexts[index].length > 100) {
			textElement.textContent = truncateText(fullTexts[index]);
		}

		// Attach click event
		link.addEventListener("click", e => {
			const currentText = textElement.textContent;

			// If text is truncated
			if (currentText.endsWith("...")) {
				textElement.textContent = fullTexts[index];
				e.target.textContent = "Show less";
			} else {
				textElement.textContent = truncateText(fullTexts[index]);
				e.target.textContent = "Click here for more informations";
			}
		});
	});
}

function truncateText(text) {
	return text.slice(0, 100) + "...";
}
