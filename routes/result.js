'use strict';

var express  = require('express');
var router = express.Router();
var path = require('path');
var Result = require(path.join('../', 'app/result'));

router.param('raceId', function(req, res, next, raceId) {
    req.raceId = raceId;
    next()
 
});

router.get('/races/:raceId/results', function(req, res, next) {
  res.render('results', {
		raceId : req.raceId
	});
});

router.post('/races/:raceId/results', function(req, res, next) {
 		Result.save(req, function(err, resp){
 			if(err){
				next(err);
			}else{
				return res.render('results', {
					raceId : req.raceId
				});
			}
		});
});

module.exports = router;