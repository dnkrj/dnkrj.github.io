window.addEventListener('scroll', () => {
	document.querySelector('.horizontal').classList.toggle('isHidden', window.scrollY > window.scrollX);
	document.querySelector('.vertical').classList.toggle('isHidden', window.scrollX > window.scrollY);
});
