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

//Need a route for changing hamburger to devoured
router.put('/:id?', function(req, res) {
	var burgerID = req.params.id;
	//update database, change eaten from 0 to 1
	//Go from C to M
	burger.update(burgerID, function() {
		res.redirect('/');
	});

	//Then from C to V
});

//Need a post to create hamburgers
router.post('/create-burger', function(req, res) {
	var newBurgerToAdd = req.body.burgerName;
	burger.create(newBurgerToAdd, function() {
		res.redirect('/');
	});
})


module.exports = router;