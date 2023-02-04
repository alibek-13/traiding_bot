const Binance = require('node-binance-api');

const config = require('../../configuration');

const apiKey = config.get('account.apiKey');
const apiSecret = config.get('account.apiSecret')
const symbol = config.get('symbol.symbol')


const binance = new Binance().options({
    apiKey,
    apiSecret,
    symbol
    })



module.exports = exports = binance 
