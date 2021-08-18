const express = require('express');

const app = express();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/pizzas', function(req, res) {
	res.render("pizza/index");
});

app.post('/pizza/add', function(req, res) {
	res.redirect("/pizzas");
});

app.get('/pizza/add', function(req, res){
	res.render('pizza/add')
});

const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});