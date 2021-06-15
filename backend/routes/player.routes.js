module.exports = app => {
    const players = require("../controllers/player.controller.js");
  
    var router = require("express").Router();

    // Retrieve all Players
    router.get("/", players.findAll);
  
    // Retrieve a single Player with id
    router.get("/:id", players.findOne);
  
    app.use('/api/players', router);
  };