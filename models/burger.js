//Import the ORM to create functions that will interact with database
var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	update: function(id, cb) {
		orm.update(id, function(res) {
			cb(res);
		});
	},
	create: function(newBurger, cb) {
		orm.create(newBurger, function(res) {
			cb(res);
		});
	}
};

//Export the database functions for the controller (burger_controller.js)
module.exports = burger;