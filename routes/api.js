var express= require('express');
var router = express.Router();

router.get('/d3',function(req,res){
    res.sendfile("views/pages/d3.html");
});

router.get('/houseinfo', function(req, res){
    res.sendfile("views/pages/houseinfo.html");
});

router.get('/getRegions', function(req, res){
    res.json(['锦江','武侯','成华']);
});
router.get('/getTypes', function(req, res){
    res.json(['租房','买房']);
});

router.post('/searchHouseInfo', function(req, res){
    var data = [
        {address:"1", owner_name:"abc",region:"wuhou",type:"zufang", price:"2500/monthly"},
        {address:"2", owner_name:"abcd",region:"chenghua",type:"zufang", price:"2500/monthly"},
        {address:"3", owner_name:"abce",region:"gaoxin",type:"zufang", price:"2600/monthly"},
        {address:"4", owner_name:"abcr",region:"wuhou",type:"maifang", price:"2700/monthly"}
    ];

    var searchResult = data.filter(function(item){
        if((req.body.region === undefined || item.region === req.body.region) &&
            (req.body.type === undefined || item.type === req.body.type)){
            return item;
        }
    });

    res.send(searchResult);

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