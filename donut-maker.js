export default class DonutMaker {
    constructor(donutClicks, numDonuts, numAutoClickers, costOfAutoClicker, numMultipliers, costOfMultiplier) {
        this.donutClicks = donutClicks;
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.costOfAutoClicker = costOfAutoClicker;
        this.numMultipliers = numMultipliers;
        this.costOfMultiplier = costOfMultiplier;
    }
    /*
getDonutClicks() {
    return Math.round(this.donutClicks);
}
getNumberofDonuts() {
    return Math.round(this.numDonuts);
}
getNumberOfAutoClickers() {
    return Math.round(this.numAutoClickers);
}
getCostOfAutoClicker() {
    return Math.round(this.costOfAutoClicker);
}
getNumberOfMultipliers () {
    return Math.round(this.numMultipliers);
}
getCostOfMultiplier () {
    return Math.round(this.costOfMultiplier);
}
*/

    addDonut() {
        this.numDonuts += Math.pow(1.2, this.numMultipliers);     

    }
    //disableAutoClickerButton() {
         
  //  }
    addAutoClicker() {

        if (this.numDonuts >= this.costOfAutoClicker) {
            this.numDonuts -= this.costOfAutoClicker;
            this.numAutoClickers++;
            this.costOfAutoClicker = Math.round(this.costOfAutoClicker * 1.1);
        }

    }
    activateAutoClicker() {
            for (let i = 0; i<this.numAutoClickers;i++  ){
                this.addDonut();
            }
    }
    addMultiplier() {
        if(this.numDonuts >= this.costOfMultiplier) {
           this.numDonuts -= this.costOfMultiplier;
           this.numMultipliers++; 
           this.costOfMultiplier = Math.round(this.costOfMultiplier * 1.1);            
           this.donutClicks = Math.pow(1.2, this.numMultipliers);  
           
    }
}
}
