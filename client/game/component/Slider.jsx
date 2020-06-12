/**
 * Spare slider component
 * To make this reuse for other component
 */
import React from "react";
import Slider from "meteor/empirica:slider";

export default ({
  value,
  onSlideChange,
  newPrediction,
  aiPrediction,
  userPrediction,
}) => {
  handleChange = (num) => {
    onSlideChange(num);
  };

  return (
    <div className="slider">
      <div className="slider-component slider-component-label">
        <div className="slider-percentage-row">
          <div className="slider-percentage-label slider-label">
            <span>0%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>25%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>50%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>75%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>100%</span>
          </div>
        </div>
      </div>
      <div className="slider-component">
        <Slider
          className="task-response-slider"
          min={0}
          max={1}
          stepSize={0.01}
          labelStepSize={0.25}
          onChange={handleChange}
          value={value}
          labelRenderer={(number) => {
            return number.toFixed(2).toString();
          }}
        />
        {aiPrediction && (
          <div
            className="prediction ai"
            style={{ left: `calc(${aiPrediction * 100}% - 6.5px)` }}
          >
            <div className="prediction-content">
              <div className="prediction-point" />
              <div className="prediction-line" />
              <div className="prediction-box">AI Prediction – 25%</div>
            </div>
          </div>
        )}
        {userPrediction && (
          <div
            className="prediction user"
            style={{ left: `calc(${userPrediction * 100}% - 6.5px)` }}
          >
            <div className="prediction-content">
              <div className="prediction-point" />
              <div className="prediction-line" />
              <div className="prediction-box">Your final prediction – 58%</div>
            </div>
          </div>
        )}
        {newPrediction && (
          <div
            className="prediction new-prediction"
            style={{ left: `calc(${newPrediction * 100}% - 6.5px)` }}
          >
            <div className="prediction-content">
              <div className="prediction-box">Your New Prediction</div>

              <div className="prediction-line" />
            </div>
          </div>
        )}
      </div>
      <div className="slider-component slider-component-text">
        <div className="slider-text-row">
          <div className="slider-text-label slider-label">
            <span>
              Very unlikely
              <br />
              to date again
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Unlikely to <br />
              date again
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Neither likely
              <br />
              nor unlikely
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Likely to
              <br />
              date again
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Very likely
              <br />
              to date again
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
