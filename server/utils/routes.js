module.exports = function (app, db) {
  app.route('/todos')
    .get(function (req, res) {
      db.todo.findAll()
      .then(function (results) {
        res.send(results);
      });
    })
    .post(function (req, res) {
      db.todo.create(req.body)
      .then(function (data) {
        res.status(201).send(data);
      })
      .catch(function (err) {
        res.status(400).send(err.message);
      });
    });
  app.route('/users')
    .get(function (req, res) {
      db.user.findAll()
      .then(function (results) {
        res.send(results);
      })
      .catch(function (err) {
        res.status(500).send(err.message);
      });
    })
    .post(function (req, res) {
      db.user.create(req.body)
        .then(function (data) {
          res.status(201).send(data);
        })
        .catch(function (err) {
          res.status(400).send(err.message);
        });
    });
};