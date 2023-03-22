const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const userData = require('./routes/home');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(userData.routes);
app.use(userRoutes);

// Render
app.use((req, res, next) => {
    res.status(404).render('404', ({ pageTitle: 'Page Not Found', path: 'Error' }));
})

app.listen(3000);