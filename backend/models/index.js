const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.player = require("./player.model.js")(mongoose);
db.activity = require("./activity.model.js")(mongoose);

module.exports = db;