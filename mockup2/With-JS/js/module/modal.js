// Function to handle the display and behavior of modals
export function handleModal() {
	// Get the modal container
	const modals = document.getElementById("myModal");

	// Get the close button for the modal
	const closeBtn = document.getElementsByClassName("close")[0];

	// Get all the links that should trigger the modal when clicked
	const links = document.querySelectorAll(".blog-link");

	// Loop through each link to add a click event listener
	links.forEach(function (link) {
		link.addEventListener("click", function (e) {
			// Prevent the default link behavior
			e.preventDefault();

			// Get the closest parent card of the clicked link
			const card = e.target.closest(".card");

			// Extract image source and text from the card
			const imgSrc = card.querySelector("img").src;
			const cardText = card.querySelector(".card-text").innerHTML;

			// Set the image and text in the modal
			document.querySelector(".modal-img-container").innerHTML =
				'<img src="' + imgSrc + '">';
			document.querySelector(".modal-text-container").innerHTML = cardText;

			// Display the modal
			modals.style.display = "block";
		});
	});

	// Add click event listener to the close button to hide the modal
	closeBtn.onclick = function () {
		modals.style.display = "none";
	};

	// Close the modal when clicking outside of it
	window.onclick = function (event) {
		if (event.target === modals) {
			modals.style.display = "none";
		}
	};
}
