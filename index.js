document.body.classList.add('isClickable');

document.body.querySelectorAll('img').forEach((img) => {
  img.addEventListener('click', () => {
    let index = Number(img.parentElement.dataset.index)
    if (index < Number(img.parentElement.dataset.images)) {
      let image = new Image();
      image.onload = () => img.src = image.src;
      image.src = img.parentElement.dataset.imageRoot + index + ".jpg";
      img.parentElement.dataset.index = index + 1;
    } else {
      window.location.href = img.parentElement.dataset.href;
    }
  });
});