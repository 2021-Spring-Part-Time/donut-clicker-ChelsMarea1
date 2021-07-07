class DonutMaker {
    constructor(numDonuts, numAutoClickers, costOfAutoClicker, costOfMultiplier) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.costOfAutoClicker = costOfAutoClicker;
        this.costOfMultiplier = this.costOfMultiplier;
    }
    addDonut() {
        this.numDonuts++;
    }
    addAutoClicker() {
        if (this.numDonuts >= 100) {
            this.numAutoClickers++;
            this.numDonuts -= 100;
            this.costOfAutoClicker = Math.round(this.costOfAutoClicker * 1.1);
        }
    }
    activateAutoClicker() {
        if (this.numAutoClickers > 0) {
            this.numDonuts += this.numAutoClickers;
    
        }
    }
}
    export default DonutMaker;
