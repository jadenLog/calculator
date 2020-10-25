import Button from './components/Button';
import Table from './components/Table';
import './index.scss';

const appElement = document.getElementById('app');

const clearButtonElement = Button(['gray'], 'C', () => {
    window.alert('Clear Clicked');
}).get();
const signChangeButtonElement = Button(['gray'], '+/-').get();
const percentButtonElement = Button(['gray'], '%').get();
const divideButtonElement = Button(['orange'], '/', () => {
    window.alert('Division Clicked');
}).get();

const number7ButtonElement = Button(['dark-gray'], '7', () => {
    window.alert('7 Clicked');
}).get();
const number8ButtonElement = Button(['dark-gray'], '8', () => {
    window.alert('8 Clicked');
}).get();
const number9ButtonElement = Button(['dark-gray'], '9', () => {
    window.alert('9 Clicked');
}).get();
const multiplyButtonElement = Button(['orange'], 'X', () => {
    window.alert('Multiplication Clicked');
}).get();

const number4ButtonElement = Button(['dark-gray'], '4', () => {
    window.alert('4 Clicked');
}).get();
const number5ButtonElement = Button(['dark-gray'], '5', () => {
    window.alert('5 Clicked');
}).get();
const number6ButtonElement = Button(['dark-gray'], '6', () => {
    window.alert('6 Clicked');
}).get();
const SubtractButtonElement = Button(['orange'], '-', () => {
    window.alert('Subtraction Clicked');
}).get();

const number1ButtonElement = Button(['dark-gray'], '1', () => {
    window.alert('1 Clicked');
}).get();
const number2ButtonElement = Button(['dark-gray'], '2', () => {
    window.alert('2 Clicked');
}).get();
const number3ButtonElement = Button(['dark-gray'], '3', () => {
    window.alert('3 Clicked');
}).get();
const PlusButtonElement = Button(['orange'], '+', () => {
    window.alert('Plus Clicked');
}).get();

const number0ButtonElement = Button(['dark-gray', 'long'], '0', () => {
    window.alert('0 Clicked');
}).get();
const dotButtonElement = Button(['dark-gray'], '.').get();
const equalButtonElement = Button(['orange'], '=', () => {
    window.alert('equal Clicked');
}).get();

const tableElement = Table([
    [clearButtonElement, signChangeButtonElement, percentButtonElement, divideButtonElement],
    [number7ButtonElement, number8ButtonElement, number9ButtonElement, multiplyButtonElement],
    [number4ButtonElement, number5ButtonElement, number6ButtonElement, SubtractButtonElement],
    [number1ButtonElement, number2ButtonElement, number3ButtonElement, PlusButtonElement],
    [number0ButtonElement, , dotButtonElement, equalButtonElement],
]);

tableElement.render(appElement);
