window.addEventListener('scroll', () => {
	document.querySelector('.horizontal').hidden = document.body.scrollTop > document.body.scrollLeft;
	document.querySelector('.vertical').hidden = document.body.scrollLeft > document.body.scrollTop;
});