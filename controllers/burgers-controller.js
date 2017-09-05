const express = require("express");
const router = express.Router();
let db = require("../models");

// GET route for all of the posts
router.get("/", function (req, res) {
  db.Burger.findAll().then(function (data) {
    res.json(data);
  });
});

// POST route for saving a new burger
router.post("/", function (req, res) {
  db.Burger.create(req.body).then(function (data) {
    res.json(data);
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
       res.json(data);
     });
});

// DELETE route for deleting burger
router.delete("/:id", function (req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (data) {
    res.json(data);
  });
});

// Export routes for server.js to use
module.exports = router;
