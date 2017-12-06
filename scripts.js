window.addEventListener('scroll', () => {
	document.querySelector('.horizontal').classList.toggle('isHidden', window.scrollY > window.scrollX);
	document.querySelector('.vertical').classList.toggle('isHidden', window.scrollX > window.scrollY);
	document.querySelector('.background').style.opacity = Math.max(window.scrollX / 5 - 100, 0) / 100;
});
