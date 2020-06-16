import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  render() {
    const { game, stage, player, round } = this.props;
    const roundIndex = game.roundIds.indexOf(player.round._id);
    const roundCount = game.roundIds.length;
    return (
      <>
        <div className="value-label">
          <span>CASE</span>{" "}
          {round.get("practice")
            ? "Practice"
            : roundIndex.toString() + " / " + (roundCount - 1).toString()}
        </div>

        <Timer stage={stage} />
        <div className="value-label">
          <span>SCORE</span> {Math.round(player.get("cumulativeScore")) || 0}
        </div>
      </>
    );
  }
}
