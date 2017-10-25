window.addEventListener('scroll', () => {
	document.querySelector('.horizontal').classList.toggle('isHidden', document.body.scrollTop > document.body.scrollLeft);
	document.querySelector('.vertical').classList.toggle('isHidden', document.body.scrollLeft > document.body.scrollTop);
});