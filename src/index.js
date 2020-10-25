import Calculation from './logic/Calculation';
import Calculator from './logic/Calculator';
import Button from './components/Button';
import Table from './components/Table';
import './index.scss';

const calcaulator = new Calculator();
const appElement = document.getElementById('app');

const displayElement = document.createElement('div');
displayElement.id = 'display-number';
displayElement.innerText = calcaulator.display;
appElement.append(displayElement);

const clearButtonElement = Button(['gray'], 'C', () => {
    calcaulator.init();
}).get();
const signChangeButtonElement = Button(['gray'], '+/-').get();
const percentButtonElement = Button(['gray'], '%').get();
const divideButtonElement = Button(['orange'], '/', () => {
    calcaulator.onMethodClicked(Calculation.METHOD_TYPES.DIVIDE);
}).get();

const number7ButtonElement = Button(['dark-gray'], '7', () => {
    calcaulator.onNumberClicked(7);

    displayElement.innerText = calcaulator.display;
}).get();
const number8ButtonElement = Button(['dark-gray'], '8', () => {
    calcaulator.onNumberClicked(8);

    displayElement.innerText = calcaulator.display;
}).get();
const number9ButtonElement = Button(['dark-gray'], '9', () => {
    calcaulator.onNumberClicked(9);

    displayElement.innerText = calcaulator.display;
}).get();
const multiplyButtonElement = Button(['orange'], 'X', () => {
    calcaulator.onMethodClicked(Calculation.METHOD_TYPES.MULTIPLY);
}).get();

const number4ButtonElement = Button(['dark-gray'], '4', () => {
    calcaulator.onNumberClicked(4);

    displayElement.innerText = calcaulator.display;
}).get();
const number5ButtonElement = Button(['dark-gray'], '5', () => {
    calcaulator.onNumberClicked(5);

    displayElement.innerText = calcaulator.display;
}).get();
const number6ButtonElement = Button(['dark-gray'], '6', () => {
    calcaulator.onNumberClicked(6);

    displayElement.innerText = calcaulator.display;
}).get();
const SubtractButtonElement = Button(['orange'], '-', () => {
    calcaulator.onMethodClicked(Calculation.METHOD_TYPES.SUBTRACT);
}).get();

const number1ButtonElement = Button(['dark-gray'], '1', () => {
    calcaulator.onNumberClicked(1);

    displayElement.innerText = calcaulator.display;
}).get();
const number2ButtonElement = Button(['dark-gray'], '2', () => {
    calcaulator.onNumberClicked(2);

    displayElement.innerText = calcaulator.display;
}).get();
const number3ButtonElement = Button(['dark-gray'], '3', () => {
    calcaulator.onNumberClicked(3);

    displayElement.innerText = calcaulator.display;
}).get();
const PlusButtonElement = Button(['orange'], '+', () => {
    calcaulator.onMethodClicked(Calculation.METHOD_TYPES.ADD);
}).get();

const number0ButtonElement = Button(['dark-gray', 'long'], '0', () => {
    calcaulator.onNumberClicked(0);

    displayElement.innerText = calcaulator.display;
}).get();
const dotButtonElement = Button(['dark-gray'], '.').get();
const equalButtonElement = Button(['orange'], '=', () => {
    calcaulator.onEqualClicked();

    displayElement.innerText = calcaulator.display;
}).get();

const tableElement = Table([
    [clearButtonElement, signChangeButtonElement, percentButtonElement, divideButtonElement],
    [number7ButtonElement, number8ButtonElement, number9ButtonElement, multiplyButtonElement],
    [number4ButtonElement, number5ButtonElement, number6ButtonElement, SubtractButtonElement],
    [number1ButtonElement, number2ButtonElement, number3ButtonElement, PlusButtonElement],
    [number0ButtonElement, , dotButtonElement, equalButtonElement],
]);

tableElement.render(appElement);
