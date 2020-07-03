import React from "react";

import { Centered } from "meteor/empirica:core";

import Radio from "./Radio";
export default class QuizStepOne extends React.Component {
  state = {
    answer: {
      value: "",
      error: false,
    },
    toast: {
      show: false,
      message: "",
    },
  };

  handleChange = (event) => {
    const el = event.currentTarget;
    this.setState({
      [el.name]: {
        value: el.value.trim().toLowerCase(),
        error: false,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { answer } = this.state;

    if (answer.value !== "b") {
      this.setState({
        answer: {
          ...answer,
          error: true,
        },
        toast: {
          show: true,
          message: "Your answer was incorrect. Please try again.",
        },
      });
      return;
    }
    this.props.onNext();
    this.setState({
      answer: {
        error: false,
      },
    });
  };

  render() {
    const { hasPrev, onPrev } = this.props;
    const { answer, toast } = this.state;
    return (
      <Centered className="with-topper">
        <div className="quiz">
          <h1> Quiz </h1>
          <p>
            Having read the instructions, please answer the following question
            before starting the experiment.
          </p>
          {toast.show && (
            <div className="intro-alert alert-error">{toast.message}</div>
          )}
          <form onSubmit={this.handleSubmit}>
            <div>
              <ol className="question">
                <li
                  className={`question-list${
                    answer.error ? " wrong-answer" : ""
                  }`}
                >
                  <p>
                    In step 1, you will look at information about a couple that
                    met through speed dating and make a prediction about:
                  </p>
                  <div>
                    <Radio
                      selected={answer.value}
                      name="answer"
                      value="a"
                      option="a"
                      label="When the couple met"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <Radio
                      selected={answer.value}
                      name="answer"
                      value="b"
                      option="b"
                      label="How likely the couple is to want a second date"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <Radio
                      selected={answer.value}
                      name="answer"
                      value="c"
                      option="c"
                      label="How long the couple has been dating"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <Radio
                      selected={answer.value}
                      name="answer"
                      value="d"
                      option="d"
                      label="None of the above"
                      onChange={this.handleChange}
                    />
                  </div>
                </li>
              </ol>
            </div>
            <p className="action-step">
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to instructions
              </button>
              <button type="submit" disabled={answer.value === ""}>
                Submit
              </button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}
