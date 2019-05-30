const Sequelize = require("sequelize");
const db = require("../config/database2");

const Client2 = db.define("clients", {
  // attributes
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  dob: {
    type: Sequelize.DATE
  }

  /* createdAt: {
    allowNull: true,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: true,
    type: Sequelize.DATE
  } */
});

module.exports = Client2;
