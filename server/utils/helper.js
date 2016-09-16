var db = require('./../db/db');
var bcrypt = require('bcrypt');
var cryptojs = require('crypto-js');
var jwt = require('jsonwebtoken');

module.exports = {

  //get request for all todos
  getAllTodos: function(req, res, next) {
    req.user
      .getTodos()
      .then(function (result) {
        res.status(200).send(result);
      })
      .catch(next);
  },

  //creating a todo
  createTodo: function (req, res, next) {
    db.todo
      .create(req.body)
      .then(function (result) {
        return Promise.all([req.user.addTodo(result), result]);
      })
      .then(function (result) {
        res.status(201).send(result[1]);
      })
      .catch(next);
  },


  //update todo
  updateTodo: function (req, res, next) {
    var userID = Number(req.params.id);
    db.todo
      .findOne({
        where: {
          id: userID,
          UserId: req.user.get('id')
        }
      })
      .then(function (result) {
        return result
          .update(req.body)
      })
      .then(function (result) {
        res.send(result);
      })
      .catch(next);
  },

  //get a single todo
  getTodo: function (req, res, next) {
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
      .catch(next);
  },

  //delete a single todo
  deleteTodo: function (req, res, next) {
    var todoID = Number(req.params.id);
    db.todo
      .destroy({
        where: {
          id: todoID,
          UserId: req.user.get('id')
        }
      })
      .then(function (result) {
        res.sendStatus(200);
      })
      .catch(next);
  },

  //creating a new user
  createUser: function (req, res) {
    db.user
      .create(req.body)
      .then(function (result) {
        var token = result.generateToken('authentication');
        userInstance = result;
        return token;
      })
      .then(function (token) {
        res.header('Auth', token).send(userInstance.toPublicJSON());
      })
      .catch(function (err) {
        console.log(err);
        res.status(401).send();
      });
  },

  //login user
  loginUser: function (req, res) {
    db.user
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then(function (result) {
        var isAuthenticated = !result
          || !bcrypt.compareSync(req.body.password, result.get('password_hash'));
        var token = result.generateToken();
        return isAuthenticated
          ? [result, token]
          : null;
      })
      .then(function (result) {
        result
          ? res.header('Auth', result[1]).send(result[0].toPublicJSON())
          : res.status(401).send();
      })
      .catch(function (err) {
        console.log(err.stack);
        res.status(401).send();
      });
  },

  //require authentication middleware
  requireAuthentication: function (req, res, next) {
    var token = req.get('Auth') || '';
    console.log(token);
    jwt.verify(token, 'qwerty098', function (err, data) {
      if(err) {
        return next(err);
      }
      db.user
        .findOne({
          where: {
            id: data.id
          }
        })
        .then(function (user) {
          req.user = user;
          next();
        })
        .catch(next);
    });
  },

  //global error handler
  error: function (err, req, res, next) {
    console.error(err);
    console.log(err.stack);
    res.status(400).send();
  }
};
