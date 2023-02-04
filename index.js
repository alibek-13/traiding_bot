
const Binance = require('node-binance-api');
const binance = require('./scr/feed');


  const main = async ()=> {


    
    await binance.websockets.prevDay(binance.symbol, (error, response) => {
        console.info(response.eventTime);
      });
  }


  main()