/* var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */

//Lo de arriba es el template de w3. Pruebo cosas mias debajo. 

var mysql = require('mysql');
const Connection = require('mysql/lib/Connection');

var con = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: '',
  database: 'misturnosapi'
});

/* con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */

/* conection.query('SELECT * FROM turno', (err, rows)) => {
  con.connect(function(err) {
    if (err) throw err;
    console.log('Los turnos del primer usuario son:');
    console.log(rows);
  });
} */

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM turno WHERE id_user = '1'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});