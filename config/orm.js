//Import MySQL conncetion
var connection = require("../config/connection.js");

//Object for all our SQL statement functions
var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOneByID: function(tableInput, field, fieldCrit, id, cb) {
		var queryString = 'UPDATE ' + tableInput + ' SET '+ field +'=' + fieldCrit + ' WHERE id=' + id;
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		})
	},
	insertOne: function(tableInput, value,newBurger, cb) {
		var queryString = 'INSERT INTO ' + tableInput + ' (' + value + ') VALUES (\"' + newBurger + '\")';
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