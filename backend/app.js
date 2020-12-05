const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const morgan = require("morgan");
app.use(morgan("tiny"));

app.use(function (req, res, next) {
    const err = newError("Not Found");
    err.status = 404;
    return next(err)
})

app.use(function (req, res, next) {
    if (err.stack) console.log(err.stack);

    res.status(err.status || 500)

    return res.json({
        error: err,
        message: err.message
    });
});

module.exports = app;