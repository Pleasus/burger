// Required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Define an instance of the express app.
var app = express();

// set port to what Heroku wants or port 3000
var PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname + '/public'));

/// Body-parser types
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// Override with POST having ?_method=DELETE or PUT
app.use(methodOverride('_method'));

// Set up Handlebars
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import the routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Initiate listener and inform user of port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});