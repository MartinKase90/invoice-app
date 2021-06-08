var express = require("express");
var router = express.Router();
var data = require("../data.json");


router.get("/", function(req, res, next) {
    res.send(data);
});
router.get("/index/:index", function(req, res, next){
    var response = [];
    response = data[req.params.index];

    res.send(response);
});

module.exports = router;
