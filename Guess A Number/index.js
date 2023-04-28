const btn = document.querySelector(".btn");
const result = document.getElementById("result");
const guess = document.querySelector(".num");
const randomNum = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", submitNum);

  function submitNum(e) {
    e.preventDefault();
    if (guess.value == randomNum) {
      result.innerHTML = "<h4>Great Job, King 👑.</h4>";
    } else {
      result.innerHTML = "<h4>Oops! 😟 Try Again.</h4>";
    }
    guess.value = "";
}
