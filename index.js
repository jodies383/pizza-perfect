const express = require('express');

const app = express();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// add your routes here...

const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});