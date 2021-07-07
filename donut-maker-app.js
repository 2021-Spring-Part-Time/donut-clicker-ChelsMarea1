import DonutMaker from './donut-maker.js';

var numberOfDonuts = document.getElementById('numberOfDonuts');
var clickForDonut = document.getElementById('createDonut');
var autoClicker = document.getElementById('autoClicker');
var autoClickerCost = document.getElementById('costOfAutoClicker');
var numberOfAutoClicker = document.getElementById('numberOfAutoClicker');

const createDonut = new DonutMaker(0,0,100,10);


clickForDonut.addEventListener('click', () => {
  createDonut.addDonut(); 
numberOfDonuts.innerHTML = createDonut.numDonuts;
console.log(createDonut.numDonuts);
});

autoClicker.addEventListener('click', () => {
createDonut.addAutoClicker();
 numberOfAutoClicker.innerHTML = createDonut.numAutoClickers;
 autoClickerCost.innerHTML = createDonut.costOfAutoClicker;
 numberOfDonuts.innerHTML = createDonut.numDonuts;
 console.log(createDonut.numDonuts);

setInterval(function () {
  createDonut.activateAutoClicker();
  numberOfDonuts.innerHTML = createDonut.numDonuts;
}, 1000);


});