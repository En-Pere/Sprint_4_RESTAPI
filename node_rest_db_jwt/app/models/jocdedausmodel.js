module.exports = (sequelize, type) => {
  return sequelize.define('taulajoc', {
    // id: {
    //   type: type.INTEGER,
    //   primaryKey: true,
    //   autoincrement: true,
    // },
    name: {
      type: type.STRING,
    },
    game: {
      type: type.STRING
    },
    dau1: {
      type: type.INTEGER
    },
    dau2: {
      type: type.INTEGER
    },
    success_percentage: {
      type: type.STRING
    },
  })
};