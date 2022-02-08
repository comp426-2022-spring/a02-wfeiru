import {coinFlips, countFlips} from './modules/coin.mjs';

let num = 1;

const args = require('minimist')(process.argv.slice(2)); //help
num = args['number'];

const flips = coinFlips(num);
const count = countFlips(flips);

console.log(flips);
console.log(count);