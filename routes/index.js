var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wikistack', list: ['Fullstack Home',
                                                    'About Me',
                                                    'My Projects',
                                                    'My City',
                                                    "Code I've written"]});
});

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'Wikistack' })
});

module.exports = router;
