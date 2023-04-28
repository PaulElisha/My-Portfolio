setInterval(myFunction, 1000);

function myFunction() {
    const time = new Date();
    let clock = document.querySelector("#clock");
    clock.innerHTML = time.toLocaleTimeString();
}
