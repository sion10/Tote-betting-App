// middleware - error handler
module.exports = function(err, req, res, next) {
	var splitedRoute = req.route.path.split("/");
	var route = splitedRoute[splitedRoute.length - 1];
	res.render(route, {
		raceId : req.raceId,
		errors : err
	});
}
