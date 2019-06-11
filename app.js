var mysql       = require('mysql');
var connection  = mysql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASSWORD,
    database    : process.env.DB_NAME
});

connection.connect();

connection.query("SELECT * FROM " + process.env.TABLE_NAME, function(err, res, fields){
    if(err)
    {
        console.error("ERROR: " + err);
    }
    console.log("result: " , res);
});

connection.end();
