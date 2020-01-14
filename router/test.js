var express = require('express');
var fs = require('fs');
var router = express.Router();

var connection = require('../index_temp.js/index.js.js.js').connection;

router.get('/gettest', function (req, res) {

    var SQL = 'HELLO GET!';
    console.log(SQL);

    res.send(SQL);

    // connection.query(SQL, function (err, data) {
    //     if (!err) {
    //         //console.log(data);
    //         res.send(data);
    //     }
    //     else {
    //         console.log(err);
    //         res.send('error');
    //     }
    // });
});

router.post("/posttest", function (req, res, next) {

    var SQL = 'HELLO POST!';

    console.log(SQL);

    res.send(SQL);
    //절 차 
    // connection.query(SQL, function (err, data) {
    //     if (!err) {
    //         //console.log(data);
    //         res.send(data);
    //     }
    //     else {
    //         console.log(err);
    //         res.send('error');
    //     }
    // });
});

module.exports = router;
