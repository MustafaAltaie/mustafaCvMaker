const express = require('express');
const bodyP = require('body-parser');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/controllers');
const path = require('path');
const upload = require('express-fileupload');

const app = express();
var port = process.env.port || 3000;
app.listen(port);

console.log('App is listening to port: ' + port);

app.use(bodyP.urlencoded({
    extended: true
}));

app.use(upload());

app.engine('html', exphbs.engine({
    extname: 'html',
    defaultLayout: 'mainLayout'
}));

app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '')));

app.use('', controllers);