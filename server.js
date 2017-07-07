//Dependcies and handles to them
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

//Allows the static HTML to use CSS and JS files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ deaultLayout: 'main' }));
app.set('view enging', 'handlebars');

//Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);

app.listen(port);