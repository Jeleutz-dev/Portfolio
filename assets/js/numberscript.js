let valueDisplays = document.querySelectorAll(".num");
let interval = 500;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 50;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue -= 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});