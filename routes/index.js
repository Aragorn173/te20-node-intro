const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world! Now with a route file!',
        title: 'Nunjucks hello world',
    });
});

router.get('/about', async function (req, res, next) {
    res.render('index.njk', {
        message: 'we do ting, ting we do 😀',
        title: 'About',
    });
});

router.get('/contact', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Do not call us, we will kidnap your family 😀',
        title: 'Contact',
    });
});


module.exports = router