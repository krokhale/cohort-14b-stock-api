var express = require('express');
var router = express.Router();
const yahooStockPrices = require('yahoo-stock-prices')
const {Portfolio, Wallet} = require('../lib/models');

router.get('/test', function(req, res, next) {
    res.json({success: true})
});

//localhost:3000/api/v1/search/AAPL
router.get('/search/:symbol', async function(req, res, next) {
    console.log('the req.params are', req.params)
    const data = await yahooStockPrices.getCurrentData(req.params.symbol);
    res.json(data)
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
