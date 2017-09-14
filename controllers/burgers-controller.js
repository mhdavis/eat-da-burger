let db = require("../models");
const express = require("express");
const router = express.Router();

// GET route for all of the posts
router.get("/", function (req, res) {
  db.Burger.findAll().then(function (data) {
    console.log(data);
    res.render("index", data);
  });
});

// POST route for saving a new burger
router.post("/api/burgers/", function (req, res) {
  db.Burger.create(req.body).then(function (data) {
    res.render("index");
  });
});

// PUT route for updating a burger's devoured status
router.put("/api/burgers/", function (req, res) {
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
router.delete("/api/burgers/:id", function (req, res) {
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
