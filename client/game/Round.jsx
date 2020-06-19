import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import TaskStimulus from "./TaskStimulus.jsx";
import TaskResponse from "./TaskResponse.jsx";

import ContentRight from "./ContentRight";

export default class Round extends React.Component {
  renderRound() {
    const { round, stage, player, game } = this.props;
    const single =
      stage.get("type") !== "social" && stage.get("type") !== "feedback";

    return (
      <main className={`main-container ${single ? "single-column" : ""}`}>
        <header className="header-left">
          <PlayerProfile
            player={player}
            stage={stage}
            game={game}
            round={round}
          />
        </header>

        <section className="content-left">
          <div className="couples-card">
            <TaskStimulus round={round} />
            <TaskResponse {...this.props} />
          </div>
        </section>

        {!single && <ContentRight {...this.props} />}
      </main>
    );
  }

  render() {
    // const { round } = this.props;
    // console.log("inst", round.get("instruction"));
    return this.renderRound();
  }
}
