const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path')
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');
const createError = require('http-errors')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use('/', indexRouter);


nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(express.static('public'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.njk');
});