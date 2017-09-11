// Define depedency and the connection variable
var mysql = require("mysql");
var connection;

// if/else to connect to JawsDB or local DB
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "burgers_db"
	});
};

// If unable to connect, show error, if conntected, show id
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Make connection module available to other code
module.exports = connection;