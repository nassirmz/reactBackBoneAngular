var db = require('./../db/db');
var bcrypt = require('bcrypt');

module.exports = {
  getAllTodos: function(req, res) {
    req.user
      .getTodos()
        .then(function (result) {
          res.status(200).send(result);
        });
  },
  createTodo: function (req, res) {
    db.todo
      .create(req.body)
      .then(function (result) {
        req.user
          .addTodo(result)
          .then(function () {
            return result.reload();
          })
          .then(function (result) {
            res.status(201).send(result);
          }, function (err) {
            console.error(err);
          });
      }, function (err) {
        console.error(err);
      })
      .catch(function (err) {
        console.log(err);
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
      .findOne({
        where: {
          id: userID,
          UserId: req.user.get('id')
        }
      })
      .then(function (result) {
        result
          .update(req.body)
          .then(function (result) {
            res.send(result);
          });
      })
      .catch(function (err) {
        console.log(err);
        res.status(400).send(err);
      });
  },
  getTodo: function (req, res) {
    var todoID = Number(req.params.id);
    db.todo
      .findOne({
        where: {
          id: todoID,
          UserId: req.user.get('id')
        }
      })
      .then(function (result) {
        res.status(200).send(result);

      })
      .catch(function (err) {
        res.status(500).send(err);
      });
  },
  deleteTodo: function (req, res) {
    var todoID = Number(req.params.id);
    db.todo
      .destory({
        where: {
          id: todoID,
          UserId: req.user.get('id')
        }
      })
      .catch(function (err) {
        res.status(500).send(err);
      });
  },
  loginUser: function (req, res) {
    db.user
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then(function (result) {
        if (!result || !bcrypt.compareSync(req.body.password, result.get('password_hash'))) {
          res.status(401).send();
        }
        res.header('Auth', result.generateToken('authentication')).send(result.toPublicJSON());
      }, function (err) {
        res.status(500).send(err);
      });
  },
  requireAuthentication: function (req, res, next) {
    var token = req.get('Auth');
    db.user
      .findByToken(token)
      .then(function (user) {
        req.user = user;
        next();
      }, function () {
        res.status(401).send();
      });
  }
};
