var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

var port = process.env.PORT || 4568;

db.sequelize.sync({force: true})
.then(function () {
  app.listen(port, function () {
    console.log('Listening on port ', port);
  });
});
