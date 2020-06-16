import React from "react";

import { Centered } from "meteor/empirica:core";

import Radio from "./Radio";
export default class QuizTwoNoInterpretability extends React.Component {
  state = { answer: "", answer_3: "" };

  handleChange = (event) => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { answer, answer_3 } = this.state;
    const { player } = this.props;

    if (answer !== "d" && answer_3 !== "a") {
      player.exit("failedQuestion");
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { answer, answer_3 } = this.state;
    return (
      <Centered>
        <div className="quiz">
          <h1> Quiz </h1>
          <p>
            Having read the instructions, please answer the following question
            before starting the experiment.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <ol className="question">
                <li>
                  <p>In step 2, you will:</p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="a"
                      label="a. Receive predictions made by an AI system"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="b"
                      label="b. Receive predictions made by other people"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="c"
                      label="c. Have a chance to revise your initial predictions from step 1"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="d"
                      label="d. Both a and c"
                      onChange={this.handleChange}
                    />
                  </p>
                </li>
                <li>
                  <p>Which of the following two statements is true:</p>
                  <p>
                    <Radio
                      selected={answer_3}
                      name="answer_3"
                      value="a"
                      label="a. After you revise your prediction, you will receive information about whether that couple actually had a second date."
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <Radio
                      selected={answer_3}
                      name="answer_3"
                      value="b"
                      label="b. Even after you revise your prediction, you will not receive information about whether the couple actually went on a second date."
                      onChange={this.handleChange}
                    />
                  </p>
                </li>
              </ol>
            </div>
            <p className="action-step">
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to instructions
              </button>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}