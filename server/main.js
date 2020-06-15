import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";
import data from "./experiment_data/2-exp1_data_20190319.json";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.

let questionText =
  "Please review the profile below and predict whether the participant indicated that she would like to see her date again.";

let practiceData = {
  _id: 237,
  correct_answer: "No",
  model_prediction: "Yes",
  model_prediction_prob: 0.89,
  features: {
    InterestsCorr: 0.37,
    Gender: "Woman",
    Race: "European/Caucasian-American",
    Age: 23.0,
    Attractive: 7.0,
    Sincere: 8.0,
    Intelligent: 9.0,
    Fun: 6.0,
    Ambitious: 7.0,
    SharedInterests: 6.0,
    Gender_Partner: "Man",
    Race_Partner: "Asian/Pacific Islander/Asian-American",
    Age_Partner: 31.0,
    Attractive_Partner: 4.0,
    Sincere_Partner: 6.0,
    Intelligent_Partner: 8.0,
    Fun_Partner: 7.0,
    Ambitious_Partner: 4.0,
    SharedInterests_Partner: 3.0,
  },
  model_global_explination: "/task/tasks/global.png",
  model_local_explination: "/task/tasks/237.png",
};

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
  // const stageDuration = game.treatment.stageLength || 120;
  // const socialStageDuration = game.treatment.socialStageLength || 120;
  const stageDuration = 3500;
  const socialStageDuration = 3500;

  for (let i = -1; i < roundCount; i++) {
    if (i === -1) {
      const pair = practiceData;

      const round = game.addRound({
        data: {
          ...pair,
          practice: true,
        },
      });

      round.addStage({
        name: "practice-initial",
        displayName: "Practice - Initial Response",
        durationInSeconds: stageDuration,
        data: {
          type: "solo",
          practice: true,
          questionText: questionText,
        },
      });

      if (playerCount > 1) {
        round.addStage({
          name: "practice-social",
          displayName: "Practice - Interactive Response",
          durationInSeconds: socialStageDuration,
          data: {
            type: "social",
            practice: true,
            questionText: questionText,
            interpretationType: interpretationType,
          },
        });
      }

      if (feedback) {
        round.addStage({
          name: "practice-outcome",
          displayName: "Practice - Round Outcome",
          durationInSeconds: stageDuration,
          data: {
            type: "feedback",
            practice: false,
          },
        });
      }
    } else {
      const randomPair = shuffledData[i];

      const round = game.addRound({
        data: {
          ...randomPair,
        },
      });

      round.addStage({
        name: "initial",
        displayName: "Initial Response",
        durationInSeconds: stageDuration,
        data: {
          type: "solo",
          practice: false,
          questionText: questionText,
        },
      });

      if (playerCount > 1) {
        round.addStage({
          name: "social",
          displayName: "Interactive Response",
          durationInSeconds: socialStageDuration,
          data: {
            type: "social",
            practice: false,
            questionText: questionText,
            interpretationType: interpretationType,
          },
        });
      }

      if (feedback) {
        round.addStage({
          name: "outcome",
          displayName: "Round Outcome",
          durationInSeconds: stageDuration,
          data: {
            type: "feedback",
            practice: false,
          },
        });
      }
    }
  }
});
