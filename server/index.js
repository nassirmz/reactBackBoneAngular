var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

var port = process.env.PORT || 4568;

app.listen(port, function () {
  console.log('Listening on ', port);
});