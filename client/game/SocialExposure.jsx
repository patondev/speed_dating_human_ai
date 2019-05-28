import React from "react";
import Slider from "meteor/empirica:slider";

export default class SocialExposure extends React.Component {
  renderSocialInteraction(otherPlayer) {
    const value = otherPlayer.round.get("value");
    return (
      <div className="alter" key={otherPlayer._id}>
        <img src={otherPlayer.get("avatar")} className="profile-avatar" />
        <div className="range">
          <Slider
            min={0}
            max={1}
            stepSize={0.01}
            labelStepSize={0.25}
            value={value}
            disabled
            hideHandleOnEmpty
          />
        </div>
      </div>
    );
  }

  render() {
    const { game, player, stage, round } = this.props;

    const imgPath =
      stage.get("interpretationType") === "Global"
        ? round.get("model_global_explination")
        : stage.get("interpretationType") === "Local"
          ? round.get("model_local_explination")
          : null;

    console.log("img: " + imgPath);

    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    if (otherPlayers.length === 0) {
      return null;
    }
    const bots = game.players.filter(p => p.bot);
    const revealBots = game.treatment.revealBots || false;

    return (
      <div className="social-exposure">
        <p>
          Your previous prediction was '
          <b>{Math.round(player.round.get("prediction") * 100)}</b>
          %'
        </p>

        {game.treatment.interactiveBot ? (
          <div>
            <p>
              <strong>
                There {otherPlayers.length > 1 ? "are " : "is "}
                {otherPlayers.length} other{" "}
                {bots.length > 0 && revealBots ? "bot" : "player"}
                {otherPlayers.length > 1 ? "s:" : ":"}
              </strong>
            </p>
            {otherPlayers.map(p => this.renderSocialInteraction(p))}
          </div>
        ) : (
          <p>
            The {revealBots ? "A.I." : "other player"} predicts a match
            probability of '
            <b>
              {!stage.get("practice")
                ? Math.round(otherPlayers[0].round.get("prediction") * 100)
                : Math.round(round.data.model_prediction_prob * 100)}
            </b>
            %'
          </p>
        )}

        {imgPath ? (
          <div className="explanation">
            <p>
              <strong>Feature importance for match prediction: </strong>
            </p>
            <img src={imgPath} alt={imgPath} />
          </div>
        ) : null}

        {stage.get("practice") ? (
          stage.get("interpretationType") === "Global" ? (
            <div>
              <p>
                According to A.I. algorithm,{" "}
                <b>
                  <i>Fun</i>
                </b>
                ,{" "}
                <b>
                  <i>Attractiveness</i>
                </b>{" "}
                and{" "}
                <b>
                  <i>Shared Interests</i>
                </b>{" "}
                of an attendee are the most important factors influencing the
                match probabilities. The next most important factors are the{" "}
                <b>
                  <i>differences in attractiveness and shared interests</i>
                </b>{" "}
                between participant and her partner.
              </p>
              <p>
                On the other hand, the algorithm indicates that{" "}
                <b>
                  <i>sincerity</i>
                </b>{" "}
                or{" "}
                <b>
                  <i>ambition</i>
                </b>{" "}
                have little effect on whether a speed date will be result in a
                match. Whether the attendee and her partner are of the{" "}
                <b>
                  <i>same race</i>
                </b>{" "}
                is determined to be the least important factor.
              </p>
              <p>
                You can decide whether or not to modify the predictions made in
                the previous step. You can choose to modify your predictions at
                any point. If you want to modify your results, select the value
                you want, otherwise please reselect the same value.
              </p>
            </div>
          ) : stage.get("interpretationType") === "Local" ? (
            <div>
              <p>
                The chart above explains which factors or attributes of the
                dating couple were the primary drivers of the algorithm’s
                prediction of 16%. For example, in the following case, the
                predicted matching probability of the algorithm is comparatively
                low of 16%. According to the algorithm, the attendee got a high
                score for{" "}
                <b>
                  <i>Shared Interests</i>
                </b>{" "}
                from her partner), so it raised the matching probability as much
                as 12% compared to average cases. On the other hand, relatively
                low score of{" "}
                <b>
                  <i>Attractiveness</i>
                </b>{" "}
                and{" "}
                <b>
                  <i>Fun</i>
                </b>{" "}
                had negative effects on the match probability of this attendee
                by as much as 22% and 18%.
              </p>
              <p>
                You can decide whether or not to modify the predictions made in
                the previous step. You can choose to modify your predictions at
                any point. If you want to modify your results, select the value
                you want, otherwise please reselect the same value.
              </p>
            </div>
          ) : (
            ""
          )
        ) : (
          <p>
            If you want to modify your results, select the value you want,
            otherwise please reselect the same value.
          </p>
        )}
      </div>
    );
  }
}
