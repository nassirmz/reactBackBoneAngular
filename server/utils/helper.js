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
      .then(function (result) {
        res.status(201).send(result);
      })
      .catch(function (err) {
        res.status(400).send(err);
      });
  },
  createUser: function (req, res) {
    db.user
      .create(req.body)
      .then(function (result) {
        res.status(201).send(result.toPublicJSON());
      })
      .catch(function (err) {
        res.status(400).send(err);
      });
  },
  getUser: function (req, res) {
    var userID = Number(req.params.id);
    db.user
      .findById(userID)
      .then(function (result) {
        res.send(result);
      })
      .catch(function (err) {
        res.status(401).send(err);
      });
  },
  updateTodo: function (req, res) {
    var userID = Number(req.params.id);
    db.todo
      .findById(userID)
      .then(function (result) {
        result
          .update(req.body)
          .then(function (result) {
            res.send(result);
          });
      })
      .catch(function (err) {
        res.status(400).send(err);
      });
  },
  getTodo: function (req, res) {
    var todoID = Number(req.params.id);
    db.todo
      .findById(todoID)
      .then(function (result) {
        res.send(result);
      })
      .catch(function (err) {
        res.status(500).send(err);
      });
  },
  deleteTodo: function (req, res) {
    var todoID = Number(req.params.id);
    db.todo
      .findById(todoID)
      .then(function (result) {
        result.destroy()
        .then(function (result) {
          res.send(result);
        });
      })
      .catch(function (err) {
        res.status(500).send(err);
      });
  }
};