//Import the ORM to create functions that will interact with database
var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	update: function(id, cb) {
		orm.updateOneByID("burgers", "devoured", 1, id, function(res) {
			cb(res);
		});
	},
	create: function(newBurger, cb) {
		orm.insertOne('burgers', 'burger_name', newBurger, function(res) {
			cb(res);
		});
	}
};

//Export the database functions for the controller (burger_controller.js)
module.exports = burger;