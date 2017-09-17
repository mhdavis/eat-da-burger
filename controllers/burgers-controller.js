let db = require("../models");
const express = require("express");
const router = express.Router();

// GET route for all of the posts
router.get("/", function (req, res) {

  db.Burger.findAll().then(function (resp) {
    let burgerArr = [];
    for (let i=0; i < resp.length; i++) {
      burgerArr.push(resp[i].dataValues);
    }

    let burgerObj = {};
    burgerObj.burgers = burgerArr;

    console.log(burgerObj);

    res.render("index", burgerObj);
  });
});

// POST route for saving a new burger
router.post("/", function (req, res) {
  db.Burger.create(req.body).then(function (data) {
    res.redirect("/");
  });
});

// PUT route for updating a burger's devoured status
router.put("/", function (req, res) {
  let burger = {
    name: req.body.name,
    devoured: !req.body.devoured
  }

  db.Burger.update(burger,
     {
       where: {
         id: req.body.id
       }
     }).then(function(data) {
       res.render("index");
     });
});

// DELETE route for deleting burger
router.delete("/", function (req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (data) {
    res.render("index");
  });
});

// Export routes for server.js to use
module.exports = router;
