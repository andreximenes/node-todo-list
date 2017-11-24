var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./models/todoListModel'), //created model loading here
bodyParser = require('body-parser');
//var expressLayouts = require('express-ejs-layouts')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

// set the view engine to ejs
//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/todoListRoutes'); //importing route
routes(app); //register the route

//deve sempre ser colocado após as rotas
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);