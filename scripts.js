window.addEventListener('scroll', () => {
	document.querySelector('.horizontal').classList.toggle('isHidden', document.body.scrollTop > document.body.scrollLeft);
	document.querySelector('.vertical').classList.toggle('isHidden', document.body.scrollLeft > document.body.scrollTop);
	document.querySelector('.background').style.opacity = Math.max(document.body.scrollLeft / 5 - 100, 0) / 100;
});