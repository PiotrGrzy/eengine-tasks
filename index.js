const input = document.getElementById('numInput');
const button = document.getElementById('submitBtn');

button.addEventListener('click', submitForm);

function getSecFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('sec');
}

function setValueOnButton(secondsLeft) {
  button.textContent = secondsLeft;
}

function countDown(time) {
  for (let i = 0; i <= time; i++) {
    (function (n) {
      setTimeout(function () {
        setValueOnButton(time - n);
      }, n * 1000);
    })(i);
  }
}

function submitForm(e) {
  if (e) {
    e.preventDefault();
  }

  button.textContent = 'wysyłanie';
  button.disabled = true;
  input.disabled = true;
  //init(parseInt(input.value));

  console.log('form submit!');
}

const init = inputSeconds => {
  const seconds = inputSeconds || getSecFromUrl() || 5;
  countDown(seconds);
  button.disabled = false;
  input.disabled = false;
  input.value = seconds;
  setTimeout(submitForm, seconds * 1000);
};

window.onload = init;
