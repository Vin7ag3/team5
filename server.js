// req dependencies
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// config handlebars as the view engine
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'main', 
  extname: '.handlebars',
  partialsDir: __dirname + '/views/partials',
}));

app.set('view engine', 'handlebars');

// define routes
const htmlRoutes = require('./routes/html-routes.js');
app.use(htmlRoutes);

// listen on port 3000
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});

