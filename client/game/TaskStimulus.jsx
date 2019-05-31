import React from "react";

export default class TaskStimulus extends React.Component {
  renderFeatureRow(pairData, feature, display = null) {
    const partnerFeature = feature + "_Partner";
    const displayName = display ? display : feature;
    return (
      <tr>
        <th className="color-female">{displayName}</th>
        <td>{pairData[feature]}</td>
        <th className="color-male">{displayName}</th>
        <td>{pairData[partnerFeature]}</td>
      </tr>
    );
  }

  render() {
    const { round, stage, game } = this.props;
    const task = round.get("task");

    const revealBots = game.treatment.revealBots || false;

    return (
      <div className="task-stimulus">
        {!stage.get("practice") ? (
          <h3 className="bp3-heading">{stage.get("questionText")}</h3>
        ) : (
          ""
        )}

        <div className="task-table">
          <table>
            <tbody>
              <tr>
                <th>Matching ID</th>
                <td>{task._id}</td>
                <th>Interests Correlation</th>
                <td>{task.features.InterestsCorr}</td>
              </tr>
              <tr>
                <th className="color-female" colSpan="2">
                  Woman
                </th>
                <th className="color-male" colSpan="2">
                  Man
                </th>
              </tr>
              {this.renderFeatureRow(task.features, "Race")}
              {this.renderFeatureRow(task.features, "Age")}
              {this.renderFeatureRow(task.features, "Attractive")}
              {this.renderFeatureRow(task.features, "Sincere")}
              {this.renderFeatureRow(task.features, "Intelligent")}
              {this.renderFeatureRow(task.features, "Fun")}
              {this.renderFeatureRow(task.features, "Ambitious")}
              {this.renderFeatureRow(
                task.features,
                "SharedInterests",
                "Shared Interests"
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
