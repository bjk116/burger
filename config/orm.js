//Import MySQL conncetion
var connection = require("../config/connection.js");

//Object for all our SQL statement functions
var orm = {
	all: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	update: function(id, cb) {
		var queryString = 'UPDATE burgers SET devoured=1 WHERE id=' + id;
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		})
	},
	create: function(newBurger, cb) {
		var queryString = 'INSERT INTO burgers (burger_name) VALUES (\"' + newBurger + '\")';
		connection.query(queryString, function(err, result) {
			if(err){
				throw err;
			}
			cb(result);
		})
	}
};

//Export the orm object for the model burger.js
module.exports = orm;