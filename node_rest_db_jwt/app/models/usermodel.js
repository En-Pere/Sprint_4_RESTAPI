module.exports = (sequelize, type) => {
  return sequelize.define('taulauser', {
    // id: {
    //   type: type.INTEGER,
    //   primaryKey: true,
    //   autoincrement: true,
    // },
    username: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: type.STRING(150),
      allownull: false
    },
  })
};