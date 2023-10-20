const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// config handlebars as the view engine
app.engine('handlebars', exphbs({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  defaultLayout: 'main',
  extname: 'handlebars',
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// define routes
const htmlRoutes = require('./routes/html-routes.js');
app.use(htmlRoutes);

// import route modules
const productsRoutes = require('./routes/product-routes'); 
const itemsRoutes = require('./routes/item-routes'); 

// use route modules
app.use('/products', productsRoutes); 
app.use('/items', itemsRoutes); 

// listen on the specified port
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});

