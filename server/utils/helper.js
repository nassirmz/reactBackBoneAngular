var db = require('./../db/db');

module.exports = {
  getAllTodos: function(req, res) {
    db.todo
      .findAll()
      .then(function(results) {
        res.send(results);
      });
  },
  createTodo: function (req, res) {
    db.todo
      .create(req.body)
      .then(function (data) {
        res.status(201).send(data);
      })
      .catch(function (err) {
        res.status(400).send(err.message);
      });
  },
  createUser: function (req, res) {
    db.user
      .create(req.body)
      .then(function (user) {
        res.status(201).send(user);
      })
      .catch(function (err) {
        res.status(400).send(err.message);
      });
  },
  getUser: function (req, res) {
    var userID = Number(req.params.id);
    db.user
      .findById(userID)
      .then(function (user) {
        res.send(user);
      })
      .catch(function (err) {
        res.status(401).send(err.message);
      });
  }
};