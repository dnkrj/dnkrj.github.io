const input = document.querySelector('input');
const messages = [
  [..."Type messages in the input below."],
  [..."Use ⏎ to send the message."],
  [..."Messages begining with * will used for corrections."],
  [..."Try correcting this mistack."],
];

const corrections = [[], [], [], []];
corrections[2].push({start: 38, end: 50});

const mergeIntervals = correction => {
  const result = [];
  let last;
  correction.forEach(c => {
    if (!last || c.start > last.end) {
      result.push(c);
      last = c;
    } else if (c.end > last.end) {
      last.end = c.end;
    }
  });

  return result;
}

const search = (message, correction) => {
  const start = message.indexOf(correction[0]);
  const end = start + correction.length;
  const score = start == -1 ? 1 : 0;
  return {start, end, score};
}

const submit = (event) => {
  if (event.keyCode != 13) {
    return;
  }

  const message = [...input.value];
  if (!message.length) {
    return;
  }

  input.value = '';

  if (message[0] != '*') {
    const element = document.createElement('p');
    element.classList.add('message');
    element.textContent = message.join('');
    document.querySelector('.messages').insertBefore(element, input);
    messages.push(message);
    corrections.push([]);
    return;
  }

  const correction = message.slice(1);
  const elements = [...document.querySelectorAll('.message')];
  const searches = messages.map(m => search(m, correction));
  const scores = searches.map(({score}) => score);
  const lowestScore = Math.min(...scores);
  const index = scores.lastIndexOf(lowestScore);
  const {start, end} = searches[index];
  messages[index] = messages[index].slice(0, start).concat(correction, messages[index].slice(end));
  const element = elements[index];
  element.innerHTML = '';
  const c = corrections[index];
  c.push({start, end});
  c.sort((a, b) => a.start - b.start || a.end - b.end);
  corrections[index] = mergeIntervals(c);
  let last = 0;
  corrections[index].forEach(c => {
    const textNode = document.createTextNode(messages[index].slice(last, c.start).join(''));
    element.appendChild(textNode);
    const correctionNode = document.createElement('em');
    correctionNode.textContent = messages[index].slice(c.start, c.end).join('');
    element.appendChild(correctionNode);
    last = c.end;
  });
  const textNode = document.createTextNode(messages[index].slice(last).join(''));
  element.appendChild(textNode);
}

input.addEventListener('keyup', submit);