const preview = document.querySelector(".preview");
[...document.querySelectorAll("a")].map((link) => {
  const updatePreview = (event) => {
    preview.style.backgroundImage = `url("${event.target}preview.jpg")`;
  }
  link.addEventListener("mouseover", updatePreview);
  link.addEventListener("focus", updatePreview);
})