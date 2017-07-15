//Set up mysql connection/login details
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Bourassa13!bk',
		database: 'burgers_db'
	});
}

//Make connection
connection.connect(function(err) {
	if(err) {
		console.error("error conecting: " + err.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);	
});

//Export for use in our ORM
module.exports = connection;