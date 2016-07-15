var express= require('express');
var router = express.Router();

router.get('/d3',function(req,res){
    res.sendfile("views/pages/d3.html");
});

router.get('/todo/:todoNumber' , function(req, res) {
    console.log(req)
    res.sendStatus("200");
});

router.post('/comparison', function(req,res){
    res.json([
        { year: '2008', value1: 20, value2:10},
        { year: '2009', value1: 10 ,value2:11},
        { year: '2010', value1: 5 ,value2:12},
        { year: '2011', value1: 5 ,value2:13},
        { year: '2012', value1: 20 ,value2:14 },
        { year: '2013', value1: 25 ,value2:14 },
        { year: '2014', value1: 20 ,value2:13 },
        { year: '2015', value1: 20 ,value2:14 }
    ]);
});

module.exports = router;