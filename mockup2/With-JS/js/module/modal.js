export function handleModal() {
	const modals = document.getElementById("myModal");
	const closeBtn = document.getElementsByClassName("close")[0];
	const links = document.querySelectorAll(".blog-link");

	links.forEach(function (link) {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			const card = e.target.closest(".card");
			const imgSrc = card.querySelector("img").src;
			const cardText = card.querySelector(".card-text").innerHTML;

			document.querySelector(".modal-img-container").innerHTML =
				'<img src="' + imgSrc + '">';
			document.querySelector(".modal-text-container").innerHTML = cardText;

			modals.style.display = "block";
		});
	});

	closeBtn.onclick = function () {
		modals.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target === modals) {
			modals.style.display = "none";
		}
	};
}
