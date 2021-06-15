const db = require("../models");
const Activity = db.activity;

exports.findAll = (req, res) => {
    console.log(req.query)
      const player_id = req.query.player_id;
      var condition = player_id ? { player_id: { $regex: new RegExp(player_id), $options: "i" } } : {};
    
      Activity.find()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Activity."
          });
        });
    };
  
  // Find a single Activity with an id
  exports.findOne = (req, res) => {
      const player_id = req.params.id;
      const timestamp = req.params.timestamp;

      console.log(timestamp)
      let upper = new Date(timestamp * 1000).getTime();
      let lower = new Date(upper - 1000 * 60 * 60).getTime();
      //{ $gt: lower / 1000, $lt: upper / 1000}
      var condition = { player_id: player_id,  hour_timestamp: { $gte: lower / 1000, $lte: upper / 1000}  };
  
      Activity.find(condition)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "No Activity with id " + player_id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving Activity with id=" + player_id });
        });
    };
  