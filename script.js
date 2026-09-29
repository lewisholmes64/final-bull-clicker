const camera = document.getElementById("camera");
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
  camera.srcObject = stream;
});

let bulls = 1;
let clickPower = 1;
let multiplierCost = 50;
let autoClickerCost = 500;
let autoClicker = false;

const counter = document.getElementById("counter");
const clickPowerDisplay = document.getElementById("clickPower");

const button = document.getElementById("bullBtn");
const multiplierBtn = document.getElementById("multiplierBtn");
const autoClickerBtn = document.getElementById("autoClickerBtn");


button.addEventListener("click", function() {
  bulls = bulls + clickPower;

  counter.textContent = "Bulls: " + bulls;
});


multiplierBtn.addEventListener("click", function() {
  if (bulls >= multiplierCost) {

    bulls = bulls - multiplierCost;

    clickPower = clickPower * 2;

    multiplierCost = multiplierCost * 5;

    counter.textContent = "Bulls: " + bulls;

    clickPowerDisplay.textContent = "Click Power: " + clickPower;

    multiplierBtn.textContent =
      "Buy x2 Click Power - Cost: " + multiplierCost;
  }
});


autoClickerBtn.addEventListener("click", function() {
  if (bulls >= autoClickerCost && autoClicker === false) {

    bulls = bulls - autoClickerCost;

    autoClicker = true;

    autoClickerBtn.textContent = "Auto Clicker Bought!";

    counter.textContent = "Bulls: " + bulls;

    setInterval(function() {
      bulls = bulls + (clickPower / 2);

      counter.textContent = "Bulls: " + bulls;
    }, 2000);
  }
});