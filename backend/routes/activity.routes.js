module.exports = app => {
    const activities = require("../controllers/activity.controller.js");
  
    var router = require("express").Router();

    // Retrieve all Players
    router.get("/", activities.findAll);
  
    // Retrieve a single Player with id and timestamp
    router.get("/:id/:timestamp", activities.findOne);
  
    app.use('/api/activities', router);
  };