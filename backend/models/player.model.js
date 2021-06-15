module.exports = mongoose => {
  const Player =mongoose.model(
      "player",
      mongoose.Schema(
        {
          player_id: String,
          codename: String,
          team: String
        },
        { timestamps: true }
      )
    );
    return Player;
  };