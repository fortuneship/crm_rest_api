const Sequelize = require("sequelize");

module.exports = new Sequelize("crm_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/* db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  }); */
