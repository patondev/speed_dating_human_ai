import React from "react";

import { Centered } from "meteor/empirica:core";

import TaskStimulus from "./../game/TaskStimulus"; //TODO: we should make this work!

export default class InstructionStepTwo extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Instructions - For each round</h1>

          <p>
            You will predict the success/failure of {game.treatment.roundCount}{" "}
            different dates by using 17 different attributes of the pair.
            Specifically, you will predict the probability of a match.
          </p>

          <p>
            You will be able to review several attributes of each participant
            (demographics such as race as well as ratings such as attractiveness
            as shared by the partner):
          </p>

          <p>
            <strong>
              Attractive, Sincere, Intelligent, Fun, Ambitious, Shared Interests
            </strong>
            : Evaluation scores (0 to 10) from the partner after a short
            four-minute date. For example, if a woman's fun is six points, it
            means that the man partner rated her fun as six points.
          </p>
          <p>
            <strong>Interests Correlation</strong>: Correlation score (-1 to 1)
            between woman’s and man’s interests (e.g. sports, foods, hobby,
            etc.) surveyed prior to speed dating. If this score is 1, women and
            men share exactly the same interests. If this score is -1, the two
            attendees have perfectly opposite tastes. If the score is zero, the
            two have no common interests. Please refer to the picture below for
            an example of the information you will see in this experiment.
          </p>

          <img src="/solosample.png" className="sample-img" />

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
