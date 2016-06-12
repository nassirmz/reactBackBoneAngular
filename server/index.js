var express = require('express');
var db = require('./db/db');

var app = express();

//set up middleware
require('./utils/middleware')(app, express);

//routes
require('./utils/routes')(app, db);
var port = process.env.PORT || 4568;

db.sequelize.sync({force: true})
.then(function () {
  app.listen(port, function () {
    console.log('Listening on port ', port);
  });
});
