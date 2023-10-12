export function initShowcase() {
	const mainImage = document.querySelector(".main-image img");
	const mainImgText = document.querySelector(".main-img-text");
	const thumbnails = document.querySelectorAll(".thumbnail");

	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener("click", function () {
			// Update main image src using string manipulation
			const thumbnailImg = thumbnail.querySelector("img");
			const smallImageSrc = thumbnailImg.src;

			// Replace "-small.jpg" with "b.jpg"
			const largeImageSrc = smallImageSrc.replace("-small.jpg", "b.jpg");
			mainImage.src = largeImageSrc;

			// Update main image alt text
			mainImage.alt = thumbnailImg.alt;

			// Update main image title & description
			const thumbnailText = thumbnail.querySelector(".thumbnail-text");
			const title = thumbnailText.querySelector("a").textContent;
			const description = thumbnailText.querySelector("p").textContent;

			mainImgText.querySelector(".main-img-title").textContent = title;
			mainImgText.querySelector("p").textContent = description;
		});
	});
}
