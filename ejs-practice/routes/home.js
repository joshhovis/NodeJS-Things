const path = require('path');

const express = require('express');

// const userData = require('./users');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home',
        path: '/'
    });
});

router.post('/', (req, res, next) => {
    const obj = Object.assign({}, req.body);
    users.push({ name: obj.name });
    res.redirect('/users');
});

exports.routes = router;
exports.users = users;