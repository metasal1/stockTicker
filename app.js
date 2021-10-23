let wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcaud@trade');
let wseth = new WebSocket('wss://stream.binance.com:9443/ws/ethaud@trade');
let stockPriceElementBTC = document.getElementById('stock-price-btc');
let stockPriceElementETH = document.getElementById('stock-price-eth');

let lastPrice = null;


wsbtc.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementBTC.innerText = price;

    stockPriceElementBTC.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

    lastPrice = price;
    console.log("BTC: " + stockObject.p + " " + Date.now() + " " + performance.now());
}
wseth.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementETH.innerText = price;
    stockPriceElementETH.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

    lastPrice = price;
    console.log("ETH: " + stockObject.p + " " + Date.now() + " " + performance.now());
}