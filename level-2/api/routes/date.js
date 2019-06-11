const mysql         = require('mysql');

const connection    = mysql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASSWORD,
    database    : process.env.DB_NAME
});

const express   = require('express');
const router    = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handling get req to data"
    });
});

router.post('/', (req, res, next) => {
    date = new Date();
    connection.connect();
    connection.query(" INSERT INTO record(data_time) VALUES ('" + date+ "')", function(err, res, fields)
    {
        if(err)
        {
            console.error("ERROR: " + err);
        }
    });
    connection.end();
    res.status(200).json({
        message: "success"
    })
})

module.exports = router;