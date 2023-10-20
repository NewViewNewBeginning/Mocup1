import { hamMenu } from "./module/hamburger-menu.js";
import { quoteHandle } from "./module/quote.js";
import { scrollTop } from "./module/scroll-top.js";
import { handleModal } from "./module/modal.js";

document.addEventListener("DOMContentLoaded", function () {
	hamMenu();
	setInterval(quoteHandle, 10000);
	scrollTop();
	handleModal();
});
