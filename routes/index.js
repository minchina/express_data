var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
    //res.sendfile("views/pages/index.html")
});

router.get('/react', function(req, res){
    res.sendfile("views/pages/reactpages/index.html");
});

module.exports = router;
