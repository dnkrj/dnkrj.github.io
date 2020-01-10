document.body.classList.add('isClickable');

document.body.querySelectorAll('img').forEach((img) => {
	img.addEventListener('click', () => {
		window.location.href = img.parentElement.dataset.href
	});
});