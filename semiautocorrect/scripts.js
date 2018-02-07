const input = document.querySelector('input');

const search = (message, correction) => {
  const start = message.indexOf(correction.charAt(0).toLowerCase());
  const end = start + correction.length;
  const score = start == -1 ? 1 : 0;
  return {start, end, score};
}

const submit = (event) => {
  if (event.keyCode != 13) {
    return;
  }

  const message = input.value;
  if (!message) {
    return;
  }

  input.value = '';

  if (message.charAt(0) != '*') {
    const element = document.createElement('p');
    element.classList.add('message');
    element.textContent = message;
    document.querySelector('.messages').insertBefore(element, input);
    return;
  }

  const correction = message.slice(1);
  const elements = [...document.querySelectorAll('.message')];
  const messages = elements.map(e => e.innerHTML);
  const searches = messages.map(m => search(m, correction));
  const scores = searches.map(({score}) => score);
  const lowestScore = Math.min(...scores);
  const index = scores.lastIndexOf(lowestScore);
  const {start, end} = searches[index];
  const mess = elements[index];
  mess.innerHTML = `${mess.innerHTML.slice(0, start)}<em>${escape(correction)}</em>${mess.innerHTML.slice(end)}`;
}

input.addEventListener('keyup', submit);