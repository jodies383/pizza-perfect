const express = require('express');
const exphbs = require('express-handlebars');
const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

const bodyParser = require('body-parser');
const app = express();



app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// add your routes here...
app.get('/', function (req, res) {

    res.render('index', {
    });
});

app.get('/pizzas', function (req, res) {

});

app.get('/pizza/add', function (req, res) {
	res.render('add-pizza');

});

app.post('/pizza/add/', function (req, res) {
	res.redirect('/pizzas');
});

app.get('/pizza/edit/:pizza_id', function (req, res) {

});

app.post('/pizza/edit', function (req, res) {
	res.redirect('/pizzas');
});


const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});