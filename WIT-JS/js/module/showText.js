export function showText() {
	const showHideTextLinks = document.querySelectorAll(".show-text");

	showHideTextLinks.forEach(link => {
		link.addEventListener("click", e => {
			const textElement = e.target.previousElementSibling;
			const fullText = textElement.getAttribute("data-full-text");
			const currentText = textElement.textContent;

			// If text is truncated
			if (currentText.endsWith("...")) {
				textElement.textContent = fullText;
				link.textContent = "Show less";
			} else {
				textElement.textContent = truncateText(fullText);
				link.textContent = "Click here for more informations";
			}
		});
	});

	initialTruncate();
}

function initialTruncate() {
	const allTexts = document.querySelectorAll(".event-text");
	allTexts.forEach(textElement => {
		if (textElement.textContent.length > 100) {
			// Store the full text in a custom attribute
			textElement.setAttribute("data-full-text", textElement.textContent);
			textElement.textContent = truncateText(textElement.textContent);
		}
	});
}

function truncateText(text) {
	return text.slice(0, 100) + "...";
}
