const quotes = [
	"Feast like a king without the royal expenses! Grab our exclusive discounts now!",
	"Turn your moments delicious. Dive into our special meal offers!",
	"For the love of food, relish our special deals and satiate your cravings!",
	"A meal without a deal? That's no meal! Discover our latest food promotions today!",
	"Why pay more when you can savor more for less? Dive into our delicious deals!",
	"Celebrate every bite with our delightful discounts. Limited time offer!",
	"Good food is a joy. Great discounts make it a celebration!",
	"From our kitchen to your plate – enjoy mouthwatering meals with unbeatable offers!",
	"Eating well shouldn't break the bank. Check out our latest food specials!",
	"Discover the taste of savings. Indulge in our exclusive food promotions!",
];

export function quoteHandle() {
	const quotePlaceholder = document.querySelector(".quote-text");
	quotePlaceholder.textContent =
		quotes[Math.floor(Math.random() * quotes.length)];
}
