var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('add')
});

router.post('/submit', function(req, res) {
  var models = require('../models');
  var title = "Add Wikistack page";
  var body = "This is my body";
  var url_name = generateUrlName(title);

  var p = new models.Page({ "title": title,
    "body": body,
    "url_name": url_name });
  p.save();
  res.redirect('/');
});

var generateUrlName = function(name) {
  if (typeof name != "undefined" && name != "") {
    return name.replace(/\s/ig,"_").replace(/\W/ig,"");
  } else {
    return Math.random().toString(36).substring(2,7);
  }
};

module.exports = router;
