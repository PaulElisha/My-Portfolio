const btnClick = document.querySelector("button");
const text = document.querySelectorAll(".enterText");

btnClick.addEventListener("click", myFunction);
function myFunction(e) {
  e.preventDefault();
  for (const el of text) {
    if (el.value == "") {
      document.getElementById("demo").textContent = "*   Fill All Input Field   *";
      document.getElementById("demo").style.color = "red";
      el.style.borderColor = "red";
    };
  }
}
