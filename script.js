const showMessageBtn = document.querySelector('#show-message-btn');
const message = document.querySelector('#message');
const clickCount = document.querySelector('#click-count');

let count = 0;

showMessageBtn.addEventListener('click', showMessage);

function showMessage() {
  count++;
  clickCount.textContent = count;
  message.textContent = `Você clicou no botão ${count} vezes!`;
  message.style.display = 'block';
}
