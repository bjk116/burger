var express = require('express');

var router = express.Router();

//Import the model to use the database functions
var burger = require('../models/burger.js');

//Create all our routes and set up logic within those routes where required

//Defualt page
router.get('/', function(req, res) {
	//Call database, use cb function to render page
	console.log('Connected to root');
	burger.all(function(data) {
		var hamburgerObjects = {
			hamburger: data
		};
		console.log(hamburgerObjects);
		res.render('index', hamburgerObjects);
	});
});

//Need a post to create hamburgers

//Need a route for changing hamburger to devoured

module.exports = router;