import React from "react";

import StepTwoGlobalInterpretability from "../../intro/StepTwoGlobalInterpretability.jsx";
import StepTwoLocalInterpretability from "../../intro/StepTwoLocalInterpretability.jsx";
import StepTwoNoInterpretability from "../../intro/StepTwoNoInterpretability.jsx";

import QuizTwoGlobalInterpretability from "../../intro/QuizTwoGlobalInterpretability";
import QuizTwoLocalInterpretability from "../../intro/QuizTwoLocalInterpretability";
import QuizTwoNoInterpretability from "../../intro/QuizTwoNoInterpretability";

export default class Instruction extends React.Component {
  state = {
    quiz: false,
    answered: false,
    toast: {},
  };
  goToQuiz = () => {
    this.setState({
      quiz: true,
    });
  };
  goToNextStep = (passed = false) => {
    const { player } = this.props;
    if (passed) {
      player.stage.submit();
      return;
    }
    this.setState({
      toast: {
        show: true,
        message: "Your answer was incorrect. Please try again.",
      },
    });
  };
  render() {
    const {
      game: { treatment },
    } = this.props;
    const { interpretationType = "None", giveFeedback } = treatment;
    const { toast, quiz } = this.state;

    if (quiz) {
      return (
        <>
          {toast.show && (
            <div className="intro-alert alert-error">{toast.message}</div>
          )}
          {interpretationType.toLowerCase() === "global" && (
            <QuizTwoGlobalInterpretability nextStep={this.goToNextStep} />
          )}
          {interpretationType.toLowerCase() === "local" && (
            <QuizTwoLocalInterpretability nextStep={this.goToNextStep} />
          )}
          {interpretationType.toLowerCase() === "none" && (
            <QuizTwoNoInterpretability nextStep={this.goToNextStep} />
          )}
        </>
      );
    }
    if (!quiz)
      return (
        <>
          {!treatment.revealBots ? (
            <div>
              <p>
                Now we provide the other player's predictions for your last
                forecasts.
              </p>
              <p>
                You can decide whether or not to modify the predictions made in
                the previous step. You can choose to modify your predictions at
                any point. If you want to modify your results, select the value
                you want, otherwise please reselect the same value.
              </p>
              <button
                type="button"
                className="btn-prediction-big"
                onClick={() => {
                  player.stage.submit();
                }}
              >
                Start the revision of previous cases
              </button>
            </div>
          ) : interpretationType.toLowerCase() === "global" ? (
            <StepTwoGlobalInterpretability
              nextStep={this.goToQuiz}
              giveFeedback={giveFeedback}
            />
          ) : interpretationType.toLowerCase() === "local" ? (
            <StepTwoLocalInterpretability
              nextStep={this.goToQuiz}
              giveFeedback={giveFeedback}
            />
          ) : (
            <StepTwoNoInterpretability
              nextStep={this.goToQuiz}
              giveFeedback={giveFeedback}
            />
          )}
        </>
      );
  }
}
