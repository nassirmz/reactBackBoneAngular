var bcrypt = require('bcrypt');
var _ = require('underscore');
var cryptojs = require('crypto-js');
var jwt = require('jsonwebtoken');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    salt: {
      type: DataTypes.STRING
    },
    password_hash: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      val: {
        len: [3, 100]
      },
      set: function (value) {
        var salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync(value, salt);
        this.setDataValue('password', value);
        this.setDataValue('salt', salt);
        this.setDataValue('password_hash', hashedPassword);
      }
    }
  }, {
    classMethods: {
      findByToken: function (token) {
        return new Promise(function (resolve, reject) {
          try {
            var decodedJWT = jwt.verify(token, 'qwerty098');
            var bytes = cryptojs.AES.decrypt(decodedJWT.token, 'abc123!@#!');
            var tokenData = JSON.parse(bytes.toString(cryptojs.enc.Utf8));
            user
              .findById(tokenData.id)
              .then(function (result) {
                if (result) {
                  resolve(result);
                } else {
                  reject();
                }
              }, function (err) {
                console.log(err);
                reject();
              });
          } catch (err) {
            reject();
            console.log(err);
          }
        });
      }
    },
    instanceMethods: {
      toPublicJSON: function () {
        var json = this.toJSON();
        return _.pick(json, 'id', 'email', 'createdAt', 'updatedAt');
      },
      generateToken: function (type) {
        if (!_.isString(type)) {
          return undefined;
        }
        try {
          var stringData = JSON.stringify( {id: this.get('id'), type: type });
          var encryptedData = cryptojs.AES.encrypt(stringData, 'abc123!@#!').toString();
          var token = jwt.sign({
            token: encryptedData
          }, 'qwerty098');
          return token;
        } catch (err) {
          console.log(err);
          return undefined;
        }
      }
    }
  });

  return user;
};
