// Array containing a list of promotional quotes for food discounts
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

// Function that randomly selects a quote from the quotes array
// and displays it in an element with the class "quote-text"
export function quoteHandle() {
	// Get the element where the quote needs to be displayed
	const quotePlaceholder = document.querySelector(".quote-text");

	// Assign a random quote from the quotes array to the textContent of the element
	quotePlaceholder.textContent =
		quotes[Math.floor(Math.random() * quotes.length)];
}
