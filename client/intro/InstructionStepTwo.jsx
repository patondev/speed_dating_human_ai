import React from "react";

import { Centered } from "meteor/empirica:core";

import TaskStimulus from "./../game/TaskStimulus";

export default class InstructionStepTwo extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions - Solo Round </h1>

          <div className="task-stimulus">
            <div>
              <p>In this step, you predict the success/failure of 10 different dates by using 17 different attributes of the pair. Specifically, you will predict the probability of a match. You will be able to review several attributes of each participant (demographics such as race as well as ratings such as attractiveness as shared by the partner). Please refer to the figure below for a detailed description of the information used in the experiment.</p>
            </div>

            <img src="/solosample.png" className="sample-img" />

            <div>
              <p><b>Attractive, Sincere, Intelligent, Fun, Ambitious, Shared Interests</b>: Evaluation scores (0 to 10) from the partner after a short four-minute date. For example, if a woman's fun is six points, it means that the man partner rated her fun as six points.</p>
              <p><b>Interests Correlation</b>: Correlation score (-1 to 1) between woman’s and man’s interests (e.g. sports, foods, hobby, etc.) surveyed prior to speed dating. If this score is 1, women and men share exactly the same interests. If this score is -1, the two attendees have perfectly opposite tastes. If the score is zero, the two have no common interests.</p>
            </div>
          </div>

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
