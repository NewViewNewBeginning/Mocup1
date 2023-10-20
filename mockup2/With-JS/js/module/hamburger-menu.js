export function hamMenu() {
	const menuIcon = document.querySelector(".ham-icon");
	const menu = document.querySelector("nav");

	menuIcon.addEventListener("click", function () {
		menu.classList.toggle("show");
	});

	// Ensure menu is visible for screens wider than 768px
	window.addEventListener("resize", function () {
		if (window.innerWidth > 768) {
			menu.classList.remove("show");
			menu.style.display = "block";
		} else {
			menu.style.display = "";
		}
	});

	// Initial check in case the function is loaded on a screen already wider than 768px
	if (window.innerWidth > 768) {
		menu.classList.remove("show");
		menu.style.display = "block";
	}
}
