import DonutMaker from './donut-maker.js';

var numberOfDonuts = document.getElementById('numberOfDonuts');
var clickForDonut = document.getElementById('createDonut');
var autoClicker = document.getElementById('autoClicker');
var autoClickerCost = document.getElementById('costOfAutoClicker');
var numberOfAutoClicker = document.getElementById('numberOfAutoClicker');
var multiplier = document.getElementById('multiplier');
var multiplierCost = document.getElementById('costOfMultiplier');
var numberOfMultiplier = document.getElementById('numberOfMultiplier');
var donutClicks = document.getElementById('donutsPerClick');

const createDonut = new DonutMaker(1,0,0,100,0,10);

var calculateDonutClicks = Math.pow(1.2,createDonut.numMultipliers);  


clickForDonut.addEventListener('click', () => {
createDonut.addDonut(); 
numberOfDonuts.innerHTML = createDonut.numDonuts;

});

autoClicker.addEventListener('click', () => {
createDonut.addAutoClicker();
 numberOfAutoClicker.innerHTML = createDonut.numAutoClickers;
 autoClickerCost.innerHTML = createDonut.costOfAutoClicker;
 numberOfDonuts.innerHTML = createDonut.numDonuts;
 donutClicks.innerText = createDonut.donutClicks * calculateDonutClicks;
});

//function disableAutoClickerButton () {
//  if(this.numDonuts < this.costOfAutoClicker) {
 //   autoClicker.disabled = true;
 // } else {
 //   autoClicker.disabled = false;
 // }
 // }

setInterval(function () {
  createDonut.activateAutoClicker();
  numberOfDonuts.innerHTML = createDonut.numDonuts;
}, 1000);

multiplier.addEventListener('click', () => {
  createDonut.addMultiplier();
  numberOfMultiplier.innerHTML = createDonut.numMultipliers;
  multiplierCost.innerHTML = createDonut.costOfMultiplier;
  donutClicks.innerText = createDonut.donutClicks * calculateDonutClicks;
  numberOfDonuts.innerHTML = createDonut.numDonuts;
});

//disableMultiplierButton(function () {
//  if(this.numDonuts < this.costOfMultiplier) {
//    autoClicker.disabled = true;
//  } else {
 //   autoClicker.disabled = false;
 // }
//}

//function enableAutoClickerButton() {
//if(createDonut.numDonuts < createDonut.costOfAutoClicker) {
//  document.getElementById('autoClicker').disabled = true;
//}
//else {
//  document.getElementById('autoClicker').disabled = false;
//}
//}


function refreshPage(){
  window.location.reload();
} 
const bioBtn = document.querySelector('#biobtn');
const content = document.querySelector('.bio');

bioBtn.addEventListener('click', function(){
  content.createDonut.toggle('show');
});