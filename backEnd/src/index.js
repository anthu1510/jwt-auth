const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // body parser middleware
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

// Error Handler
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
