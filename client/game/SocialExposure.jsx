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
    const task = round.get("task");
    const imgPath =
      stage.get("interpretationType") === "Global"
        ? task.model_global_explination
        : stage.get("interpretationType") === "Local"
          ? task.model_local_explination
          : null;

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
          <b>
            {player.round.get("previousPrediction") !== null
              ? Math.round(player.round.get("previousPrediction") * 100)
              : "not given"}
          </b>
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
                : Math.round(task.model_prediction_prob * 100)}
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
                The algorithm also indicates that{" "}
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
                any point. If you want to modify your results, move the slider
                to the value you want; otherwise please reselect the same value.{" "}
              </p>
            </div>
          ) : stage.get("interpretationType") === "Local" ? round.get("effectiveIndex") === 1? (
            <div>
              <p>
                The chart above explains which factors or attributes of the
                dating couple were the primary drivers of the algorithm’s
                prediction. For example, in the following case, the
                predicted matching probability of the algorithm is comparatively
                low of 32%.
              </p>
                <p>
                According to the algorithm, the woman got a high
                score for{" "}
                <b>
                  <i>Attractiveness</i>
                </b>{" "} from her partner, so it raised the matching probability by more than 15%.
                The man's high score of <b><i>Fun</i></b> also played a positive role in the couple's matching probability.

                On the other hand, a relatively <strong><i>low score of Man's Attractiveness</i></strong>
                had a negative effect on the matching probability by more than 20%.
                The <strong><i>low score of Woman’s Fun</i></strong> also lowered the matching probability.
                The <strong>participants’ low scores of Shared Interests</strong> also played a negative role in the couple's matching probability.
              </p>

              <p>
                You can decide whether or not to modify the predictions made in
                the previous step. You can choose to modify your predictions at
                any point. If you want to modify your results, select the value
                you want, otherwise please reselect the same value.
              </p>
            </div>
          ) : (
              <div>
                <p>
                  The chart above explains which factors or attributes of the
                  dating couple were the primary drivers of the algorithm’s
                  prediction. For example, in the following case, the
                  predicted matching probability of the algorithm is comparatively
                  high of 90%.
                </p>
                <p>
                  According to the algorithm, the Man received a
                  <strong><i> high score of more than 8 points from her partner in Attractiveness </i></strong>,
                   which raised the couple’s matching probability by about 14%.
                  <srong><i> The man’s high score of Fun </i></srong> also played a positive role in the couple’s matching probability.
                  The participants’ <strong><i> high scores of Shared Interests </i></strong> were also positive factors.
                  On the other hand,
                  the relatively <strong>young Age of Woman lowered the chances of the matching by more than 2.5%</strong>.
                  Also, the <strong>low score of Woman’s intelligence</strong> had a small negative effect on the matching probability.
                </p>

            <p>
              You can decide whether or not to modify the predictions made in
              the previous step. You can choose to modify your predictions at
              any point. If you want to modify your results, select the value
              you want, otherwise please reselect the same value.
            </p>
          </div>) : (
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
