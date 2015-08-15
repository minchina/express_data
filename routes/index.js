var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', {title: 'Express'});
    res.sendfile("index.html")
});

router.post('/comparison', function(req,res){
    res.json([
        { year: '2008', value1: 20, value2:10},
        { year: '2009', value1: 10 ,value2:11},
        { year: '2010', value1: 5 ,value2:12},
        { year: '2011', value1: 5 ,value2:13},
        { year: '2012', value1: 20 ,value2:14 }
    ]);
});
module.exports = router;
