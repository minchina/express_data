var express= require('express');
var router = express.Router();

router.get('/d3',function(req,res){
    res.sendfile("views/pages/d3.html");
});

module.exports = router;