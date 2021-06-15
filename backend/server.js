const express = require("express");
const cors = require("cors");
const db = require("./models");
const csv = require('csv-parser');
const fs = require('fs')

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to leaderboard application." });
});
require("./routes/player.routes")(app);
require("./routes/activity.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


  const Player = db.player;
  const Activity = db.activity;
  fs.createReadStream('./players.csv')
  .pipe(csv(['player_id', 'codename', 'team']))
  .on('data', (row) => {
    const player = new Player({
      player_id: row.player_id,
      codename: row.codename,
      team: row.team
    });
    player
    .save(player)
    .then(data => {
      //console.log('saved player row  ' + data)
    })
    .catch(err => {
      console.error('Some error occurred while creating the player: ' + err)
    });
  })
  .on('end', () => {
    console.log('Player CSV file successfully processed');
  });

  fs.createReadStream('./player_activity.csv')
  .pipe(csv(['player_id', 'hour_timestamp', 'points']))
  .on('data', (row) => {
    const activity = new Activity({
      player_id: row.player_id,
      hour_timestamp: row.hour_timestamp,
      points: row.points
    });
    activity
    .save(activity)
    .then(data => {
      //console.log('saved activity row  ' + data)
    })
    .catch(err => {
      console.error('Some error occurred while creating the activity: ' + err)
    });
  })
  .on('end', () => {
    console.log('Activity CSV file successfully processed');
  });