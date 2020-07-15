var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Escaping Query Values
  var adr = 'Mountain 21';
  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  // When query values are variables provided by the user, you should escape the values.
  // This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.
  var adr = 'Mountain 21';
  var sql = 'SELECT * FROM customers WHERE address = ?';
  con.query(sql, [adr], function(err, result) {
      if (err) throw err;
      console.log(result);
  });

  var name = 'Amy';
  var adr = 'Mountain 21';
  var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});