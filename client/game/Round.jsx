import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import SocialExposure from "./SocialExposure.jsx";
import TaskFeedback from "./TaskFeedback.jsx";
import Task from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="content">
          <PlayerProfile player={player} stage={stage} game={game} />
          <Task game={game} round={round} stage={stage} player={player} />
          {stage.get("type") === "social" ? (
            <SocialExposure
              stage={stage}
              player={player}
              game={game}
              round={round}
            />
          ) : null}
          {stage.get("type") === "feedback" ? (
            <TaskFeedback
              game={game}
              player={player}
              round={round}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
