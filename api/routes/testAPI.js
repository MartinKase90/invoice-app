var express = require("express");
var router = express.Router();
var data = require("../data.json");
var bodyParser = require('body-parser');

router.get("/", function(req, res, next) {
    res.send(data);
});
router.get("/index/:id", function(req, res, next){
    const requestedId = req.params.id;
    // console.log(requestedId);
    const result = data.find(({id}) => id === requestedId);
    // console.log(result);
    res.json(result);

    // data.find({id: requestedId}, function(err, results){
    //   if(!err){
    //     if(!results){
    //       console.log("not found");
    //       res.redirect("/");
    //     }else {
    //       res.json(results);
    //     }
    //   }
    // });





});

module.exports = router;
