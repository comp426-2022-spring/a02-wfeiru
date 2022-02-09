import { createRequire } from 'module';
import {coinFlips, countFlips} from './modules/coin.mjs';

const require = createRequire(import.meta.url)
const args = require('minimist')(process.argv.slice(2));

let num = 1;
if ('number' in args) {
    num = args['number'];
}

const flips = coinFlips(num);
const count = countFlips(flips);

console.log(flips);
console.log(count);