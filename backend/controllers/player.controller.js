const db = require("../models");
const Player = db.player;
// Retrieve all Players from the database.
exports.findAll = (req, res) => {
  console.log(req.query)
    const player_id = req.query.player_id;
    var condition = player_id ? { player_id: { $regex: new RegExp(player_id), $options: "i" } } : {};
  
    Player.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving players."
        });
      });
  };

// Find a single Players with an id
exports.findOne = (req, res) => {
    const player_id = req.params.id;
    console.log(player_id)
    var condition = player_id ? { player_id: player_id } : {};
    
    Player.find(condition)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No found Player with id " + player_id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Player with id=" + player_id });
      });
  };


