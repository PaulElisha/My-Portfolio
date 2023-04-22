let sum = "0";
display = document.getElementById("demo");
enter = document.getElementById("entry");

btn.addEventListener("click", () => {
  display.innerText = ++sum;
})

sBtn.addEventListener("click", () => {
  enter.innerText += sum + " - ";
  if (sum) {
    sum = "0";
    display.innerText = "0";
  };
})

rBtn.addEventListener("click", () => {
  enter.textContent = "Previous Entry: ";
  if (sum) {
    sum = "0";
    display.innerText = "0";
  };
})

