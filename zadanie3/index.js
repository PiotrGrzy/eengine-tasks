const input = document.getElementById('numInput');
const button = document.getElementById('submitBtn');

button.addEventListener('click', submitForm);
let countDownInterval;

const DEFAULT_SECONDS = 5;
const SUBMITING_PROCESS_DELAY = 2 * 1000;

function getSecFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return parseInt(urlParams.get('sec'));
}

function countDown(seconds) {
  countDownInterval = setInterval(function () {
    seconds--;
    button.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countDownInterval);
      submitForm();
    }
  }, 1000);
}

function setValues(seconds) {
  countDown(seconds);
  input.value = seconds;
  button.textContent = seconds;
  button.disabled = false;
  input.disabled = false;
}

function submitForm(e) {
  if (e) {
    e.preventDefault();
  }
  clearInterval(countDownInterval);
  button.textContent = 'wysyłanie';
  button.disabled = true;
  input.disabled = true;
  const seconds = parseInt(input.value);
  // delay to show submitting process
  setTimeout(() => setValues(seconds), SUBMITING_PROCESS_DELAY);
}

const init = () => {
  const seconds = getSecFromUrl() || DEFAULT_SECONDS;
  setValues(seconds);
};

window.onload = init;
