module.exports = mongoose => {
    const Activity =mongoose.model(
        "activity",
        mongoose.Schema(
          {
            player_id: String,
            hour_timestamp: Number,
            points: Number
          },
          { timestamps: true }
        )
      );
      return Activity;
};