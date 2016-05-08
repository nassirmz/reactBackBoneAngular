module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
};
