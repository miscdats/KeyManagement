const express = require('express');
var router = express.Router();

router.get('/property/1/key/1', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router;
