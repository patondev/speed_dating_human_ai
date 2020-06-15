import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import TaskStimulus from "./TaskStimulus.jsx";
import TaskResponse from "./TaskResponse.jsx";

export default class Round extends React.Component {
  state = {
    single: true,
  };
  render() {
    const { round, stage, player, game } = this.props;

    const { single } = this.state;

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

        {!single && (
          <>
            <header className="header-right">Right</header>
            <section className="content-right">Right content</section>{" "}
          </>
        )}
      </main>
    );
  }
}
