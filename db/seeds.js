const Sequelize = require("sequelize");
const Burger = require("../models/burger.js");

const sequelize = new Sequelize("burgers_db", "root", "rootlightening95", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

Burger.destroy({
  where: {},
  truncate: true
});

Burger.create({
  name: "Bacon Cheese Burger",
  devoured: false
});

Burger.create({
  name: "Apple Pork Burger",
  devoured: false
});

Burger.create({
  name: "Chili Lime Burger",
  devoured: false
});

sequelize.sync();
