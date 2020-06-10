import React from "react";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    const single = false;

    return (
      <main className={`main-container ${single ? "single-column" : ""}`}>
        <header className="header-left">
          <div>
            <span>CASE</span> 01/10
          </div>
          <div className="timer">00:15</div>
          <div>
            <span>SCORE</span> 50
          </div>
        </header>

        <section className="content-left">
          <div className="couples-card">
            <div className="couples">
              <div className="person">
                <header className="person-card">
                  {/* svg */}
                  <div className="gender">Male</div>
                  <div className="age">27 years old</div>
                  <div className="origin">European Caucasian</div>
                </header>
                <h3>Ratings</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Attractiveness</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="interests">
                <h4>Interest correlation</h4>
                <div className="interest-bar">
                  <div className="interest-measurements">
                    <div className="interest-measurement">1</div>
                    <div className="interest-measurement">0</div>
                    <div className="interest-measurement">-1</div>
                  </div>
                  <div className="interest-gradient"></div>
                  <div className="interest-marker">0.08</div>
                </div>
              </div>

              <div className="person">
                <header className="person-card">
                  {/* svg */}
                  <div className="gender">Female</div>
                  <div className="age">27 years old</div>
                  <div className="origin">European Caucasian</div>
                </header>
                <h3>Ratings</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Attractiveness</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="response">
              <h3>What you think?</h3>
              <div className="slide">Slide here</div>
              <button>Submit</button>
            </div>
          </div>
        </section>

        {!single && (
          <>
            <header className="header-right">Right</header>
            <section className="content-right">Right content</section>{" "}
          </>
        )}
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
