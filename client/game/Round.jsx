import React from "react";
import Slider from "./component/Slider";

import ContentRight from "./ContentRight";

export default class Round extends React.Component {
  state = {
    prediction: 0,
    showResult: false,
    showNewPrediction: false,
    aiPrediction: null,
    userPrediction: null,
    interestValue: 0.08,
    secondDate: true,
    results: {
      error: "25%",
      penalty: -18,
      score: 82,
    },
    single: true,
  };
  handleChange = (value) => {
    this.setState({
      prediction: value,
    });
  };
  interestPosition = () => {
    return (1 / 2 - this.state.interestValue / 2) * 100;
  };
  render() {
    const { round, stage, player, game } = this.props;
    const {
      prediction,
      showResult,
      showNewPrediction,
      aiPrediction,
      userPrediction,
      interestValue,
      secondDate,
      results,
      single,
    } = this.state;

    return (
      <main className={`main-container ${single ? "single-column" : ""}`}>
        <header className="header-left">
          <div className="value-label">
            <span>CASE</span> 01/10
          </div>
          <div className="timer">00:15</div>
          <div className="value-label">
            <span>SCORE</span> {results.score}
          </div>
        </header>

        <section className="content-left">
          <div className="couples-card">
            <div className="couples">
              <div className="person">
                <header className="person-card">
                  <div className="person-thumb">
                    <img src="/male.svg" alt="Person male" />
                  </div>
                  <div className="person-detail">
                    <div className="gender">Male</div>
                    <div className="age">27 years,</div>
                    <div className="origin">European/Caucasian- American</div>
                  </div>
                </header>
                <div className="ratings">
                  <h3>Ratings</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>Attractiveness</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Sincerity</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Shared interest</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td>Intelligence</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>Ambitions</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Fun</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="interests">
                <h4 className="title">Interest correlation</h4>
                <div className="interest-component">
                  <div className="interest-bar">
                    <div className="interest-measurements">
                      <div className="interest-measurement">1</div>
                      <div className="interest-measurement">0</div>
                      <div className="interest-measurement">-1</div>
                    </div>
                    <div className="interest-gradient"></div>
                    <div
                      className="interest-marker"
                      style={{ top: `calc(${this.interestPosition()}% - 9px)` }}
                    >
                      {interestValue.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="person">
                <header className="person-card  person-right">
                  <div className="person-thumb">
                    <img src="/female.svg" alt="Person male" />
                  </div>
                  <div className="person-detail">
                    <div className="gender">Female</div>
                    <div className="age">21 years,</div>
                    <div className="origin">European/Caucasian- American</div>
                  </div>
                </header>
                <div className="ratings ratings-right">
                  <h3>Ratings</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>Attractiveness</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Sincerity</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Shared interest</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td>Intelligence</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>Ambitions</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Fun</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="response">
              {!showResult && (
                <h3>
                  Please make a prediction about whether the couple shown in the
                  chart would want a second date.
                </h3>
              )}

              <Slider
                value={prediction}
                onSlideChange={this.handleChange}
                newPrediction={showNewPrediction}
                aiPrediction={aiPrediction}
                userPrediction={userPrediction}
                disabled={showResult}
              />

              {showResult && (
                <div className="result">
                  {secondDate ? (
                    <div className="alert">
                      <div className="alert-content">
                        <strong>Outcome</strong> The couple goes on a Second
                        Date
                      </div>
                    </div>
                  ) : (
                    <div className="alert alert-error">
                      <div className="alert-content">
                        <strong>Outcome</strong> The couple didn’t get a Second
                        Date
                      </div>
                    </div>
                  )}
                  <div className="result-score">
                    <div className="result-item">
                      <div className="result-entry label">Error</div>
                      <div className="result-entry value">{results.error}</div>
                    </div>
                    <div className="result-item">
                      <div className="result-entry label">Penalty</div>
                      <div className="result-entry value">
                        {results.penalty}
                      </div>
                    </div>
                    <div className="result-item last-item">
                      <div className="result-entry label">Score</div>
                      <div className="result-entry value">{results.score}</div>
                    </div>
                  </div>
                </div>
              )}

              <button type="button" onClick={() => console.log("click")}>
                Submit Prediction
              </button>
            </div>
          </div>
        </section>

        {!single && <ContentRight {...this.props} />}
      </main>
      // <div className="round">
      //   <div className="content">
      //     <PlayerProfile
      //       player={player}
      //       stage={stage}
      //       game={game}
      //       round={round}
      //     />
      //     <Task game={game} round={round} stage={stage} player={player} />
      //     {stage.get("type") === "social" ? (
      //       <SocialExposure
      //         stage={stage}
      //         player={player}
      //         game={game}
      //         round={round}
      //       />
      //     ) : null}
      //     {stage.get("type") === "feedback" ? (
      //       <TaskFeedback game={game} player={player} round={round} />
      //     ) : null}
      //   </div>
      // </div>
    );
  }
}
