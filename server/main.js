import Empirica from "meteor/empirica:core";

import "./callbacks.js";
import "./bots.js";

import data from "./experiment_data/2-exp1_data_20190319.json";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.

var questionText =
  "What do you think is the probability that the following participant will match her partner?";

Empirica.gameInit((game, treatment, players) => {
  players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    player.set("score", 0);
  });

  const shuffledData = _.shuffle(data);

  const roundCount = game.treatment.roundCount || 10;
  const playerCount = game.treatment.playerCount || 1;
  const interpretationType = game.treatment.interpretationType || "None";
  const feedback = game.treatment.giveFeedback || false;
  const stageDuration = game.treatment.stageLength || 120;
  const socialStageDuration = game.treatment.socialStageLength || 120;

  for (let i = 0; i < roundCount; i++) {
    const randomPair = shuffledData[i];

    const round = game.addRound({
      data: { ...randomPair }
    });

    round.addStage({
      name: "initial",
      displayName: "Initial Response",
      durationInSeconds: stageDuration,
      data: {
        type: "solo",
        questionText: questionText
      }
    });

    if (playerCount > 1) {
      round.addStage({
        name: "social",
        displayName: "Interactive Response",
        durationInSeconds: socialStageDuration,
        data: {
          type: "social",
          questionText: questionText,
          interpretationType: interpretationType
        }
      });
    }

    if (feedback) {
      round.addStage({
        name: "outcome",
        displayName: "Round Outcome",
        durationInSeconds: stageDuration,
        data: {
          type: "feedback"
        }
      });
    }
  }
});
