import { hamMenu } from "./module/hamburger-menu.js";
import { quoteHandle } from "./module/quote.js";
import { scrollTop } from "./module/scroll-top.js";

document.addEventListener("DOMContentLoaded", function () {
	hamMenu();
	quoteHandle();
	scrollTop();
});
