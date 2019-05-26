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
    const { round, stage, player } = this.props;
    const pairData = stage.name !== 'practice'
      ? round.data.features
      : round.data.practiceData.features;

    console.log(stage.name);
    console.log(pairData);

    return (
      <div className="task-stimulus">
        {stage.name !== "practice" ? <h3 className="bp3-heading">{stage.get("questionText")}</h3> : ""}

        {stage.name === "practice" && stage.get("type") === "solo" ?
          <div>
            <p>In this step, you predict the success/failure of 10 different dates by using 17 different attributes of the pair. Specifically, you will predict the probability of a match. You will be able to review several attributes of each participant (demographics such as race as well as ratings such as attractiveness as shared by the partner). Please refer to the figure below for a detailed description of the information used in the experiment.</p>
            <p><b>Attractive, Sincere, Intelligent, Fun, Ambitious, Shared Interests</b>: Evaluation scores (0 to 10) from the partner after a short four-minute date. For example, if a woman's fun is six points, it means that the man partner rated her fun as six points.</p>
            <p><b>Interests Correlation</b>: Correlation score (-1 to 1) between woman’s and man’s interests (e.g. sports, foods, hobby, etc.) surveyed prior to speed dating. If this score is 1, women and men share exactly the same interests. If this score is -1, the two attendees have perfectly opposite tastes. If the score is zero, the two have no common interests.</p>
          </div>
        : ""}

        {stage.name === "practice" && stage.get("type") === "social" ?
          stage.get("interpretationType") === "Global" ?
          <div>
            <p>Now we provide the A.I. model predictions for your last forecasts.</p>
            <p>The A.I. algorithm was trained based on data from 2,080 dates and the actual outcomes (i.e. whether a match was successful or not). The following chart explains which factors or attributes the A.I. algorithm weighs more as it arrives at its predictions.</p>
            <p>According to A.I. algorithm, <b><i>Fun</i></b>, <b><i>Attractiveness</i></b> and <b><i>Shared Interests</i></b> of an attendee are the most important factors influencing the match probabilities. The next most important factors are the <b><i>differences in attractiveness and shared interests</i></b> between participant and her partner.</p>
            <p>On the other hand, the algorithm indicates that <b><i>sincerity</i></b> or <b><i>ambition</i></b> have little effect on whether a speed date will be result in a match. Whether the attendee and her partner are of the <b><i>same race</i></b> is determined to be the least important factor.</p>
            <p>You can decide whether or not to modify the predictions made in the previous step. You can choose to modify your predictions at any point. If you want to modify your results, select the value you want, otherwise please reselect the same value.</p>
          </div>
          : stage.get("interpretationType") === "Local" ?
          <div>
            <p>Now we provide the A.I. model predictions for your last forecast. The A.I. algorithm was trained based on data from 2,080 dates and the actual outcomes (i.e. whether a match was successful or not). </p>
            <p>The following chart (right below) explains which factors or attributes of the dating couple were the primary drivers of the algorithm’s prediction of 16%. For example, in the following case, the predicted matching probability of the algorithm is comparatively low of 16%. According to the algorithm, the attendee got a high score for <b><i>Shared Interests</i></b> from her partner), so it raised the matching probability as much as 12% compared to average cases. On the other hand, relatively low score of <b><i>Attractiveness</i></b> and <b><i>Fun</i></b> had negative effects on the match probability of this attendee by as much as 22% and 18%.</p>
            <p>You can decide whether or not to modify the predictions made in the previous step. You can choose to modify your predictions at any point. If you want to modify your results, select the value you want, otherwise please reselect the same value.</p>
          </div>
          : <div>
              <p>Now we provide the A.I. model predictions for your last forecasts.</p>
              <p>You can decide whether or not to modify the predictions made in the previous step. You can choose to modify your predictions at any point. If you want to modify your results, select the value you want, otherwise please reselect the same value.</p>
            </div>
        : ""}

        <div className="task-table">
          <table>
            <tbody>
              <tr>
                <th>Matching ID</th>
                <td>{round.data._id}</td>
                <th>Interests Correlation</th>
                <td>{pairData.InterestsCorr}</td>
              </tr>
              <tr>
                <th className="color-female" colSpan="2">Woman</th>
                <th className="color-male" colSpan="2">Man</th>
              </tr>
              {this.renderFeatureRow(pairData, "Race")}
              {this.renderFeatureRow(pairData, "Age")}
              {this.renderFeatureRow(pairData, "Attractive")}
              {this.renderFeatureRow(pairData, "Sincere")}
              {this.renderFeatureRow(pairData, "Intelligent")}
              {this.renderFeatureRow(pairData, "Fun")}
              {this.renderFeatureRow(pairData, "Ambitious")}
              {this.renderFeatureRow(
                pairData,
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
