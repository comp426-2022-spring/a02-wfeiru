import { createRequire } from 'module';
import { flipACoin } from "./modules/coin.mjs";

const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));

try {
    if (!('call' in args)) {
        throw "no input";
    }
    if (args['call'] != 'heads' && args['call'] != 'tails') {
        throw "invalid input"
    }
    let call = args['call'];
    const record = flipACoin(call);
    console.log(record);
} catch (err) {
    console.log('Error: ' + err);
    console.log('Usage: node guess-flip --call=[heads|tails]');
}