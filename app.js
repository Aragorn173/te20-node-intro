const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path')
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use('/', indexRouter);


nunjucks.configure('views', {
    autoescape: true,
    express: app,
});


app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))