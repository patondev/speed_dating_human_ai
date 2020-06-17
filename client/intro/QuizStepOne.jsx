import React from "react";

import { Centered } from "meteor/empirica:core";

import Radio from "./Radio";
export default class QuizStepOne extends React.Component {
  state = { answer: "" };

  handleChange = (event) => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { answer } = this.state;
    const { player } = this.props;

    if (answer !== "b") {
      player.exit("failedQuestion");
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { answer } = this.state;
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
                  <p>
                    In step 1, you will look at information about a couple that
                    met through speed dating and make a prediction about:
                  </p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="a"
                      label="a. When the couple met"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="b"
                      label="b. How likely the couple is to want a second date"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="c"
                      label="c. How long the couple has been dating"
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <Radio
                      selected={answer}
                      name="answer"
                      value="d"
                      label="d. None of the above"
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