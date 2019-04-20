import React from "react";
import { HTMLTable } from "@blueprintjs/core";

export default class TaskFeedback extends React.Component {
  render() {
    const { game, player, round } = this.props;

    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    const other = otherPlayers.length !== 0 ? otherPlayers[0] : null;

    return (
      <div className="task-feedback">
        <HTMLTable>
          <thead>
            <tr>
              <th></th>
              <th>Guess</th>
              <th>Answer</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>You</th>
              <td align="center">{player.round.get("value")}</td>
              <td>{round.get("model_prediction")}</td>
              <td>
                <strong>{(1 - player.round.get("score")).toFixed(2)}</strong>
              </td>
            </tr>
            {other ? (
              <tr>
                <th>Other</th>
                <td align="center">{other.round.get("value").toFixed(2)}</td>
                <td>{round.get("model_prediction")}</td>
                <td>
                  <strong>{(1 - other.round.get("score")).toFixed(2)}</strong>
                </td>
              </tr>
            ) : null}
          </tbody>
        </HTMLTable>
      </div>
    );
  }
}
