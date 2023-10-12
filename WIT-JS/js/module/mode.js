export function setMode() {
	const sunIcon = document.querySelector(".fa-sun");
	const moonIcon = document.querySelector(".fa-moon");
	const rootElement = document.documentElement;

	sunIcon.addEventListener("click", () => {
		rootElement.classList.add("light-mode");
	});
	moonIcon.addEventListener("click", () => {
		rootElement.classList.remove("light-mode");
	});
}
