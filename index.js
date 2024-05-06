require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4040;
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


// Pug settings
app.set('view engine', 'pug');

// Routes
app.use('/', routes);


app.listen(PORT, function() {
    console.log(`🌎 Server listening on http://localhost:${PORT}`);
});