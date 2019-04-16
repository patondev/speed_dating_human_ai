import Empirica from "meteor/empirica:core";

// This is where you add bots, like Bob:

Empirica.bot("bob", {
  // // NOT SUPPORTED Called at the beginning of each stage (after onRoundStart/onStageStart)
  // onStageStart(bot, game, round, stage, players) {},

  // Called during each stage at tick interval (~1s at the moment)
  onStageTick(bot, game, round, stage, secondsRemaining) {
    if (
      stage.name === "social" &&
      stage.get("interpretationType") === "Interactive"
    ) {
      const answer = round.data.model_prediction_prob;
      const humanPlayers = game.players.filter(p => !p.bot);
      let humanSum = 0;
      humanPlayers.forEach(player => {
        humanSum += player.round.get("value");
      });
      // assume there is one bot
      bot.round.set("value", (answer + humanSum) / game.players.length);
    }
    return;
  }

  // // NOT SUPPORTED A player has changed a value
  // // This might happen a lot!
  // onStagePlayerChange(bot, game, round, stage, players, player) {}

  // // NOT SUPPORTED Called at the end of the stage (after it finished, before onStageEnd/onRoundEnd is called)
  // onStageEnd(bot, game, round, stage, players) {}
});
