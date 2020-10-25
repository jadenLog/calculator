import Calculation from './Calculation';

class Calculator {
    constructor() {
        this.calculation = null;
        this.display = null;
        this.method = null;
        this.previousNumber = null;

        this.init();
    }

    init() {
        this.calculation = new Calculation();
        this.display = `${this.calculation.result}`;
        this.method = null;
        this.previousNumber = null;
    }

    onNumberClicked(number) {
        if (this.display === '0' || this.previousNumber) {
            this.display = `${number}`;
        } else if (this.method !== null) {
            this.previousNumber = this.display;
        } else {
            this.display += `${number}`;
        }
    }

    onMethodClicked(type) {
        if (this.method && this.previousNumber && this.display) {
            this.onEqualClicked();
        } else {
            this.method = type;
        }
    }

    onEqualClicked() {
        const number1 = window.parseInt(this.previousNumber, 10);
        const number2 = window.parseInt(this.display, 10);

        const result = this.calculation.calculate(this.method, number1, number2);
        const displayNumber = JSON.stringify(result);
        this.previousNumber = displayNumber;
        return displayNumber;
    }
}

export default Calculator;