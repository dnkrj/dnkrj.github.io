const preview = document.querySelector(".preview");
[...document.querySelectorAll("ul a")].map((link) => {
  const updatePreview = (event) => {
    preview.style.backgroundImage = `url("${event.target}preview.jpg")`;
  }
  link.addEventListener("mouseover", updatePreview);
  link.addEventListener("focus", updatePreview);
})

const paragraphs = [...document.querySelectorAll("section > p:not(.isAlwaysOn)")];
const previews = [...document.querySelectorAll("figure")];
let selected = paragraphs[0];

const updateScroll = () => {
	paragraphs.map((paragraph) => {
		const y = paragraph.getBoundingClientRect().y;
		if (y < 150) {
			selected = paragraph;
		}
	});

	paragraphs.map((paragraph) => {
		paragraph.classList.remove('isSelected');
	})
	previews.map((paragraph) => {
		paragraph.classList.remove('isSelected');
	})

	selected.classList.add('isSelected');
	previews[paragraphs.indexOf(selected)].classList.add('isSelected');

	document.body.classList.toggle('pauseTraffic', selected != paragraphs[0]);
}

document.addEventListener('scroll', updateScroll);
updateScroll();