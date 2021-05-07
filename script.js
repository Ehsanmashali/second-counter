let startBox = document.querySelector(".start-box");
let inputCounter = startBox.querySelector("#input-counter");
let startCounter = startBox.querySelector("#start-counter");
let errorMessage = document.querySelector("#error-message");
let timerCircle = document.querySelector(".c100");
let timerNum = document.querySelector(".c100 > span");
let loadingMessage = document.querySelector(".message .loading");
let successMessage = document.querySelector(".message .success");

// console.log(inputCounter, startCounter);
startBox.style.display = "block";

startCounter.addEventListener("click", function (e) {
  let seconds = parseInt(inputCounter.value);
  // console.log(seconds);

  if (isNaN(seconds)) {
    errorMessage.textContent = "زمان را به درستی وارد کنید";
    errorMessage.classList.add("active");
    // console.log(errorMessage);
    return;
  }

  errorMessage.classList.remove("active");
  startBox.style.display = "none";
  timerCircle.style.display = "block";
  timerNum.textContent = seconds;
  loadingMessage.style.display = "block";
  successMessage.style.display = "none";

  let originalSeconds = seconds;
  let lastPercent = "p100";

  let timerId = setInterval(() => {
    if (lastPercent) timerCircle.classList.remove(lastPercent);

    if (seconds <= 0) {
      clearInterval(timerId);
      startBox.style.display = "block";
      inputCounter.value = "";
      loadingMessage.style.display = "none";
      successMessage.style.display = "block";
      timerCircle.style.display = "none";

      return;
    }

    seconds -= 1;
    timerNum.textContent = seconds;

    let percent = Math.abs(
      Math.floor(((originalSeconds - seconds) / originalSeconds) * 100 - 100)
    );
    lastPercent = `p${percent}`;
    timerCircle.classList.add(`p${percent}`);
  }, 1000);
});
