sum = "0";
display = document.getElementById("demo");
let onClick = () => {
   display.textContent = sum++;
  }

enter = document.getElementById("entry");
let saveBtn = () => {
   enter.textContent += sum - 1 + " - ";
   if (sum - 1) {
     sum = "0";
     display.textContent = "0";
   };
  }

reset = document.getElementById("entry");
let resetBtn = () => {
   reset.textContent = "Previous Entry: " + " ";
   if (sum) {
     sum = "0"; 
     display.textContent = "0";
   };
  }
    