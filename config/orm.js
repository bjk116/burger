//Import MySQL conncetion
var connection = require('connection.js');

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
	}
};

//Export the orm object for the model burger.js
module.exports = orm;