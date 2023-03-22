const path = require('path');

const express = require('express');

const userData = require('./home');

const router = express.Router();

router.get('/users', (req, res, next) => {
    const users = userData.users;

    res.render('users', {
        pageTitle: 'Users',
        users: users,
        path: '/users'
    });
});

module.exports = router;