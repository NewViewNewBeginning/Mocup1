export function hamMenu() {
	const menuIcon = document.querySelector(".ham-icon");
	const menu = document.querySelector("nav");
	menuIcon.addEventListener("click", function () {
		console.log("click");
		menu.classList.toggle("show");
	});
}
