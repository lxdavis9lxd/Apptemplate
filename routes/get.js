const express = require('express');
const getrest = require('../Middleware/get');
const router = express.Router();

router.get('/', (req, res) => {
    // Add your logic here
    res.render('get.ejs', { title: 'GET' });
});
router.get('/get', (req, res) => {
console.log("req:"  + req.query)
    // Add your logic here
    res.render('get.ejs', { title: 'GET' });
});
module.exports = router;