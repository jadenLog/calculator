class Calculation {
    constructor() {
        this.result = 0;
    }

    set(number) {
        this.result = number;
    }

    calculate(method, number) {
        const types = Object.values(Calculation.METHOD_TYPES);

        if (types.includes(method)) this[method](number);
    }

    add(number) {
        this.result += number;
    }

    subtract(number) {
        this.result -= number;
    }

    multiply(number) {
        this.result *= number;
    }

    divide(number) {
        this.result /= number;
    }
}

Calculation.METHOD_TYPES = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTIPLY: 'multiply',
    DIVIDE: 'divide',
};

export default Calculation;