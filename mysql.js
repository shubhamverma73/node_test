var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'laravel'
});
 
connection.connect();
 
connection.query('SELECT * from contact_us', function (error, results) {
  if (error) throw error;
  console.log(results);
  results.map((val, index)=> {
    console.log(`${val.id} ==> ${val.name} ${val.email} ==> ${index}`);
  }) 

});
 
connection.end();