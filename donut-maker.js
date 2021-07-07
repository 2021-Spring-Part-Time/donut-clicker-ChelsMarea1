export default class DonutMaker {
    constructor(donutClicks, numDonuts, numAutoClickers, costOfAutoClicker, numMultipliers, costOfMultiplier) {
        this.donutClicks = donutClicks;
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.costOfAutoClicker = costOfAutoClicker;
        this.numMultipliers = numMultipliers;
        this.costOfMultiplier = costOfMultiplier;
    }
    addDonut() {
        this.numDonuts += Math.pow(1.2, this.numMultipliers);     

    }
    addAutoClicker() {
        if (this.numDonuts >= 100) {
            this.numAutoClickers++;
            this.numDonuts -= 100;
            this.costOfAutoClicker = Math.round(this.costOfAutoClicker * 1.1);
        }
    }
    activateAutoClicker() {
            for (let i = 0; i<this.numAutoClickers;i++  ){
                this.addDonut();
            }
    }
    addMultiplier() {
        if(this.numDonuts >= 10) {
           this.numMultipliers++; 
            this.numDonuts -=10;
            this.costOfMultiplier = Math.round(this.costOfMultiplier * 1.1);            
        } 
        this.donutClicks = Math.pow(1.2, this.numMultipliers);  
    }
}