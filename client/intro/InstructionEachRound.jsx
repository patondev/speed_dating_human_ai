import React from "react";

import { Centered } from "meteor/empirica:core";

import TaskStimulus from "./../game/TaskStimulus"; //TODO: we should make this work!

export default class InstructionEachRound extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Instructions - For each round</h1>
          <p>
            You will predict the success/failure of {game.treatment.roundCount}{" "}
            different dates by using 18 different attributes of the pair.
            Specifically, you will predict the probability of a match.
          </p>

          <p>
            You will be able to review several attributes of each participant
            (demographics such as race as well as ratings such as attractiveness
            as rated by the partner):
          </p>

          <p>
            <strong>
              Attractive, Sincere, Intelligent, Fun, Ambitious, Shared Interests
            </strong>
            : Evaluation scores (0 to 10) from the partner after a short
            four-minute date. For example, if a woman's fun is six points, it
            means that the male partner gave her six points on the attribute of
            “fun”.
          </p>
          <p>
            <strong>Interests Correlation</strong>: Correlation score (-1 to 1)
            between woman’s and man’s interests (e.g. sports, foods, hobby,
            etc.). If this score is 1, the woman and man share exactly the same
            interests. If this score is -1, the two participants have perfectly
            opposite tastes. If the score is zero, the two have no common
            interests. Please refer to the picture below for an example of the
            information you will see in this experiment.
          </p>
          {/*TODO: change this to the table task not the interpertation*/}
          <img src="/task_sample.png" className="sample-img" />

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
