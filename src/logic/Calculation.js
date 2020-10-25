class Calculation {
    constructor() {
        this.result = 0;
    }

    set(number) {
        this.result = number;
    }

    calculate(method, number1, number2) {
        const types = Object.values(Calculation.METHOD_TYPES);

        if (types.includes(method)) {
            this.set(number1);
            return this[method](number2);
        }

        return 0;
    }

    add(number) {
        this.result += number;

        return this.result;
    }

    subtract(number) {
        this.result -= number;

        return this.result;
    }

    multiply(number) {
        this.result *= number;

        return this.result;
    }

    divide(number) {
        this.result /= number;

        return this.result;
    }
}

Calculation.METHOD_TYPES = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTIPLY: 'multiply',
    DIVIDE: 'divide',
};

export default Calculation;