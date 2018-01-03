var mongoose = require('mongoose');
var path = require("path");
var Rate = mongoose.model("Rate");

module.exports = {

    rateStar: function (req, res) {
        console.log(req.body);
        var starRating = new Rate(req.body);
        starRating.save(function(err) {
            if (err) {
                res.json("can't save this star rating");
            }
            else {
                res.json("success");
            }
        })
    }
}