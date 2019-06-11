const express       = require('express');
const app           = express();
const bodyparser    = require('body-parser');
const dateRoutes    = require('./api/routes/date');
const bookRoutes    = require('./api/routes/books');

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());

// handling Cross Origin Request
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        // below is which kind of headers you want to accept
        'Origin, X-Requested-With, Content-type, Accept, Authorization'
    );
    // check if incoming request method is equals to 'OPTIONS'
    if(req.method === 'OPTIONS')
    {
        res.header(
                'Access-Control-Allow-Methods',
                // below is which kind of methods you want to accept
                'POST, DELETE, GET'
            );
        return res.status(200).json({});
    }
    next();
});

app.use('/date', dateRoutes);
app.use('/book', bookRoutes);

module.exports = app;