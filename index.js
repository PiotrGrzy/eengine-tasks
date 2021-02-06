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
  e.preventDefault();
  console.log('form submit!');
}

const init = () => {
  const seconds = getSecFromUrl() || 5;
  countDown(seconds);
  console.log(seconds);
  setTimeout(submitForm, seconds * 1000);

  input.value = seconds;
};

window.onload = init;
