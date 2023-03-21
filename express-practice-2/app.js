const path = require('path');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const userRoute = require('./routes/users');
const homeRoute = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(userRoute);

app.use((req, res, next) => {
    console.log('Hitting home');
    res.status(404).send('<h1>Page Not Found</h1>');
    // res.sendFile(path.join(__dirname, 'views', 'home.htnml'))
});

app.listen(3000);